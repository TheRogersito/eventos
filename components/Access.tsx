import { useState } from "react";
import Register from "./Register";
import Login from "./Login";
import { Pressable, Text } from "react-native";

const Access = ({ navigation }) => {
    const [register, setRegister] = useState(true)

    return (
        <>
            {register ? <Register navigation={navigation} /> : <Login navigation={navigation} />}
            <Pressable onPress={() => setRegister(!register)}><Text>{register ? "Ir a login" : "Ir a registro"}</Text></Pressable>
        </>
    );
};
export default Access;