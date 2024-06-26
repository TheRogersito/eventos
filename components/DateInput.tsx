import { useState } from "react"
import { Pressable, View } from "react-native"
import { Input, Label } from "./styles/UserInput"
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker'
import parseDateToStr from "../utils/parseDateToString"

type Props = {
    label: string
    date: Date
    onChange: (event: DateTimePickerEvent, selectedDate: Date | undefined) => void
}

const DateInput = ({
    label,
    date,
    onChange
}: Props) => {
    const [open, setOpen] = useState(false)

    const handleChange = (_event: DateTimePickerEvent, selectedDate: Date | undefined) => {
        onChange(_event, selectedDate)
        setOpen(false)
    }

    return (
        <View>
            <Label hasFocus={false}>
                {label}
            </Label>
            <Pressable onPress={() => setOpen(true)}>
                <Input
                    editable={false}
                    hasFocus={false}
                    value={parseDateToStr(date)}
                    numberOfLines={1}
                />
            </Pressable>
            {open && (
                <DateTimePicker
                    value={date}
                    is24Hour={true}
                    onChange={handleChange}
                />
            )}
        </View>
    )
}

export default DateInput