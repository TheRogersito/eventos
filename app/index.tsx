import Access from "../components/Access"
import { View } from "react-native"

const HomePage = ({ navigation }) => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Access navigation={navigation} />
        </View>
    )
}

export default HomePage