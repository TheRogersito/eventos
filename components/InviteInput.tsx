import { useState } from "react"
import { View } from "react-native"
import { Label } from "./styles/UserInput"
import { Input } from "./styles/InviteInput"

type Props = {
    label: string
}

const InviteInput = ({
    label
}: Props) => {
    const [value, setValue] = useState('')
    const [hasFocus, setHasFocus] = useState(false)

    const onChange = (text: string) => setValue(text)

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
        </View>
    )
}

export default InviteInput