import { useState } from 'react';
import { signUp, signIn } from '../api/access';
import { View, Text, Pressable } from 'react-native';
import { InputLogin, GrayBox, RegisterTitle } from './styles/loginStyles';
import { useUserContext } from './providers/UserProvider';
import { getUserById } from '../api/users';

const Register = ({ navigation }) => {
    const [userName, setUsername] = useState('')
    const [userPw, setPwname] = useState('')
    const [, setUser] = useUserContext()

    const registerAccess = async (userName: string, userPw: string) => {
        const uid = await signUp(userName, userPw)
        console.log(uid)
        if (uid.substr(0, 8) === "Firebase") {
            alert("Error al registrarse")
        } else {
            setUser(getUserById(uid))
            await navigation.push('mainPage')
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