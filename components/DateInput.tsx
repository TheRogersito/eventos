import { useState } from "react"
import { Pressable, View, Text } from "react-native"
import { Input, Label } from "./styles/UserInput"
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker'
import parseDateToStr from "../utils/parseDateToString"

type Props = {
    label: string
}

const DateInput = ({
    label
}: Props) => {
    const [date, setDate] = useState(new Date)
    const [open, setOpen] = useState(false)

    const onChange = (_event: DateTimePickerEvent, selectedDate: Date | undefined) => {
        setOpen(false)
        if (selectedDate === undefined) return
        setDate(selectedDate)
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
                    onChange={onChange}
                />
            )}
        </View>
    )
}

export default DateInput