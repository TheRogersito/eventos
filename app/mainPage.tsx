import { Text, View } from "react-native"
import Events from "../components/Events"

const MainPage = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Events />
        </View>
    )
}

export default MainPage