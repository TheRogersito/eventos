import { useEffect, useState } from "react"
import { View } from "react-native"
import { Label } from "./styles/UserInput"
import { Input } from "./styles/InviteInput"
import { getUsers } from "../api/users"
import UserList from "./UserList"

type Props = {
    label: string
    invitedUsers: any[]
    inviteUser: (userId: string) => void
}

const InviteInput = ({
    label,
    invitedUsers,
    inviteUser
}: Props) => {
    const [value, setValue] = useState('')
    const [hasFocus, setHasFocus] = useState(false)
    const [users, setUsers] = useState<any[]>([])
    const [matchedUsers, setMatchedUsers] = useState<any[]>([])

    useEffect(() => {
        getUserList()
    }, [])

    const getUserList = async () => setUsers(await getUsers())

    const onChange = (text: string) => {
        setValue(text)

        // if (text.length <= 3) return setMatchedUsers([])

        const filteredUsers = users.filter(user => !invitedUsers.includes(user.id))

        const regex = new RegExp(text, 'ig')
        const matchedUsers = filteredUsers.filter(user => user.name.match(regex))
        setMatchedUsers(matchedUsers)
    }

    const onInviteUser = (userId: string) => {
        inviteUser(userId)
        setValue('')
    }

    const onFocus = () => setHasFocus(true)
    const onBlur = () => setHasFocus(false)

    return (
        <View>
            <Label hasFocus={hasFocus}>
                {label}
            </Label>
            <Input
                hasFocus={hasFocus}
                onChangeText={onChange}
                value={value}
                cursorColor={'#000000'}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            {matchedUsers.length > 0 && (
                <UserList
                    users={matchedUsers}
                    inviteUser={onInviteUser}
                />
            )}
        </View>
    )
}

export default InviteInput