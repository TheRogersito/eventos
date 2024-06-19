import { Text, View } from "react-native"
import Events from "../components/Events"

const MainPage = ({ navigation }: { navigation: { push: Function } }) => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Events navigation={navigation} />
        </View>
    )
}

export default MainPage