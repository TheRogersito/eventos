import { useState } from "react"
import { KeyboardType, View } from "react-native"
import { Input, Label } from "./styles/UserInput"

type Props = {
    label: string
    type?: KeyboardType
    max?: number
    lines?: number
}

const UserInput = ({
    label,
    type = "default",
    max = 40,
    lines = 1
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
                keyboardType={type}
                maxLength={max}
                multiline={lines > 1}
                numberOfLines={lines}
                cursorColor={'#000000'}
                onFocus={onFocus}
                onBlur={onBlur}
                textAlignVertical="top"
            />
        </View>
    )
}

export default UserInput