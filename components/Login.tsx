import { useState } from "react";
import { signIn, signUp } from "../api/access";
import { loginWithGoogle } from "../api/google";
import { View, Text, Pressable, TextInput } from "react-native";
import { InputLogin } from './styles/loginStyles';

const Login = () => {
    const [userName, setUsername] = useState('')
    const [userPw, setPwname] = useState('')

    return (
        <View>
            <InputLogin value={userName} onChangeText={e => setUsername(e)} />
            <InputLogin value={userPw} onChangeText={e => setPwname(e)} />
            <Pressable onPress={() => signUp(userName, userPw)}><Text>Registro</Text></Pressable>
            <Pressable onPress={loginWithGoogle()}><Text>Login with google</Text></Pressable>
        </View>
    );
};

export default Login;