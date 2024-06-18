import { useState } from "react";
import { signIn } from "../api/access";
import { Text, Pressable } from "react-native";
import { InputLogin, GrayBox, RegisterTitle } from './styles/loginStyles';
import { useUserContext } from "./providers/UserProvider";
import { getUserById } from '../api/users';
import { router } from 'expo-router';

const Login = ({ navigation }) => {
    const [userName, setUsername] = useState('')
    const [userPw, setPwname] = useState('')
    const [user, setUser] = useUserContext()

    const loginAccess = async (userName: string, userPw: string) => {
        const uid = await signIn(userName, userPw)
        console.log(uid)
        if (uid.substr(0, 8) === "Firebase") {
            alert("Error al iniciar sesión")
        } else {
            setUser(getUserById(uid))
            await navigation.push('mainPage')
            console.log(user)
        }
    }

    return (
        <GrayBox>
            <RegisterTitle>Login</RegisterTitle>
            <InputLogin value={userName} onChangeText={e => setUsername(e)} />
            <InputLogin value={userPw} onChangeText={e => setPwname(e)} />
            <Pressable onPress={() => loginAccess(userName, userPw)}><Text>Entrar</Text></Pressable>
        </GrayBox>
    );
};

export default Login;