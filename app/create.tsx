import UserInput from "../components/UserInput"
import { Container, Title } from "../components/styles"

const CreateEvent = () => {
    return (
        <Container>
            <Title>Crear nuevo evento</Title>
            <UserInput label="Nombre del evento" />
        </Container>
    )
}

export default CreateEvent