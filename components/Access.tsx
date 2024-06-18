import { useState } from "react";
import Register from "./Register";
import Login from "./Login";
import { Pressable, Text } from "react-native";

const Access = () => {
    const [register, setRegister] = useState(true)

    return (
        <>
            {register ? <Register /> : <Login />}
            <Pressable onPress={() => setRegister(!register)}><Text>{register ? "Ir a login" : "Ir a registro"}</Text></Pressable>
        </>
    );
};
export default Access;