import { TextInput } from "react-native"
import UserInput from "../components/UserInput"
import { Container, Title } from "../components/styles"
import { InputWrapper } from "../components/styles/CreateEvent"
import DateInput from "../components/DateInput"

const CreateEvent = () => {
    return (
        <Container>
            <Title>Crear nuevo evento</Title>
            <InputWrapper>
                <UserInput label="Nombre del evento" />
                <DateInput label="Fecha" />
                <UserInput label="Ubicación" />
                <UserInput label="Invitados" />
            </InputWrapper>
        </Container>
    )
}

export default CreateEvent