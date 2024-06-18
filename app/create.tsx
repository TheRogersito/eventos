import { View } from "react-native"
import UserInput from "../components/UserInput"
import { Title } from "../components/styles"

const CreateEvent = () => {
    return (
        <View>
            <Title>Crear nuevo evento</Title>
            <UserInput label="Nombre del evento" />
        </View>
    )
}

export default CreateEvent