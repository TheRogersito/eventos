import { TextInput } from "react-native"
import UserInput from "../components/UserInput"
import { Container, Title } from "../components/styles"
import { InputWrapper } from "../components/styles/CreateEvent"

const CreateEvent = () => {
    return (
        <Container>
            <Title>Crear nuevo evento</Title>
            <InputWrapper>
                <UserInput label="Nombre del evento" />
                <UserInput label="Fecha" />
                <UserInput
                    label="Descripción"
                    lines={5}
                />
            </InputWrapper>
        </Container>
    )
}

export default CreateEvent