import { useState } from "react";
import { signIn } from "../api/access";
import { Text, Pressable } from "react-native";
import { InputLogin, GrayBox, RegisterTitle, LoginButton } from './styles/LoginStyles';
import { useUserContext } from "../providers/UserProvider";
import { getUserById } from '../api/users';

const Login = ({ navigation }: { navigation: { push: Function } }) => {
    const [userName, setUsername] = useState('')
    const [userPw, setPwname] = useState('')
    const [, setUser] = useUserContext()

    const loginAccess = async (userName: string, userPw: string) => {
        const uid = await signIn(userName, userPw)
        console.log(uid)
        if (uid.substr(0, 8) === "Firebase") {
            alert("Error al iniciar sesión")
        } else {
            getUserById(uid).then((res: any) => setUser(res))
            await navigation.push('mainPage')
        }
    }

    return (
        <GrayBox>
            <RegisterTitle>Login</RegisterTitle>
            <InputLogin placeholder="email" value={userName} onChangeText={e => setUsername(e)} />
            <InputLogin placeholder="password" secureTextEntry={true} value={userPw} onChangeText={e => setPwname(e)} />
            <LoginButton onPress={() => loginAccess(userName, userPw)}><Text>Entrar</Text></LoginButton>
        </GrayBox>
    );
};

export default Login;

