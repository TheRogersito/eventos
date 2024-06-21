import { useState } from "react"
import { View } from "react-native"
import { Input, Label } from "./styles/UserInput"
import DatePicker from "react-native-date-picker"
import parseDateToStr from "../utils/parseDateToString"

type Props = {
    label: string
}

const DateInput = ({
    label
}: Props) => {
    const [date, setDate] = useState(new Date)
    const [open, setOpen] = useState(false)
    const [hasFocus, setHasFocus] = useState(false)

    const onFocus = () => setHasFocus(true)
    const onBlur = () => setHasFocus(false)

    return (
        <View>
            <Label hasFocus={hasFocus}>
                {label}
            </Label>
            <Input
                editable={false}
                hasFocus={hasFocus}
                value={parseDateToStr(date)}
                numberOfLines={1}
                onFocus={onFocus}
                onBlur={onBlur}
                onPress={() => setOpen(true)}
            />
            <DatePicker
                modal
                mode="datetime"
                locale="es_ES"
                confirmText="Confirmar"
                cancelText="Cancelar"
                open={open}
                date={date}
                onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
        </View>
    )
}

export default DateInput