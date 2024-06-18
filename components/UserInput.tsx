import { useState } from "react"
import { KeyboardType } from "react-native"
import { Input, Label } from "./styles/UserInput"
import { Container } from "./styles"

type Props = {
    label: string
    type?: KeyboardType
    max?: number
}

const UserInput = ({
    label,
    type = "default",
    max = 40
}: Props) => {
    const [value, setValue] = useState('')
    const [hasFocus, setHasFocus] = useState(false)

    const onChange = (text: string) => setValue(text)

    const onFocus = () => setHasFocus(true)
    const onBlur = () => setHasFocus(false)

    return (
        <Container>
            <Label hasFocus={hasFocus}>
                {label}
            </Label>
            <Input
                hasFocus={hasFocus}
                onChangeText={onChange}
                value={value}
                keyboardType={type}
                maxLength={max}
                cursorColor={'#000000'}
                onFocus={onFocus}
                onBlur={onBlur}
            />
        </Container>
    )
}

export default UserInput