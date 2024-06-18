import { View, Text } from "react-native";
import { useUserContext } from "./providers/UserProvider";

const Profile = () => {
    const [user, setUser] = useUserContext()

    return (
        <View>
            <Text>{user.name}</Text>
        </View>
    );
};

export default Profile;