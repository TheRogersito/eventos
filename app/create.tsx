import UserInput from "../components/UserInput"
import { Container, Title } from "../components/styles"
import { InputWrapper } from "../components/styles/CreateEvent"
import DateInput from "../components/DateInput"
import InviteInput from "../components/InviteInput"
import { useState } from "react"
import { DateTimePickerEvent } from '@react-native-community/datetimepicker';

const CreateEvent = () => {
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [date, setDate] = useState(new Date())
    const [invitedUsers, setInvitedUsers] = useState<any[]>([])

    const onNameChange = (text: string) => setName(text)
    const onLocationChange = (text: string) => setLocation(text)
    const onDateChange = (_event: DateTimePickerEvent, selectedDate: Date | undefined) => {
        if (selectedDate !== undefined) setDate(selectedDate)
    }
    const inviteUser = (userId: string) => setInvitedUsers(prevList => [...prevList, userId])

    return (
        <Container>
            <Title>Crear nuevo evento</Title>
            <InputWrapper>
                <UserInput
                    label="Nombre del evento"
                    value={name}
                    onChange={onNameChange}
                />
                <DateInput
                    label="Fecha"
                    date={date}
                    onChange={onDateChange}
                />
                <UserInput
                    label="Ubicación"
                    value={location}
                    onChange={onLocationChange}
                />
                <InviteInput
                    label="Invitados"
                    invitedUsers={invitedUsers}
                    inviteUser={inviteUser}
                />
            </InputWrapper>
        </Container>
    )
}

export default CreateEvent