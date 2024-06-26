import { FlatList, Text } from "react-native"
import { ListWrapper } from "./styles/InviteInput"

type Props = {
    users: any[]
    inviteUser: (userId: string) => void
}

const UserList = ({ users, inviteUser }: Props) => {
    const onPress = (userId: string) => () => inviteUser(userId)

    return (
        <ListWrapper>
            <FlatList
                data={users}
                renderItem={({ item }) => (
                    <Text onPress={onPress(item.id)}>{item.name}</Text>
                )}
            />
        </ListWrapper>
    )
}

export default UserList