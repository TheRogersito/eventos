import { useState } from 'react';
import { signUp, signIn } from '../api/access';
import { View, Text, Pressable } from 'react-native';
import { InputLogin, GrayBox, RegisterTitle } from './styles/loginStyles';
import { useUserContext } from './providers/UserProvider';
const Register = () => {
    const [userName, setUsername] = useState('')
    const [userPw, setPwname] = useState('')
    const [, setUser] = useUserContext()

    const registerAccess = async (userName: string, userPw: string) => {
        try {
            const uid = signIn(userName, userPw)
            await setUser(uid)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <GrayBox>
            <RegisterTitle>Registro</RegisterTitle>
            <InputLogin value={userName} onChangeText={e => setUsername(e)} />
            <InputLogin value={userPw} onChangeText={e => setPwname(e)} />
            <Pressable onPress={() => registerAccess(userName, userPw)}><Text>Registrate</Text></Pressable>
        </GrayBox>
    );
};

export default Register;