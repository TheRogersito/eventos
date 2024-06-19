import { useState } from 'react';
import { signUp } from '../api/access';
import { Text, Pressable } from 'react-native';
import { InputLogin, GrayBox, RegisterTitle, LoginButton } from './styles/LoginStyles';
import { useUserContext } from '../providers/UserProvider';
import { getUserById, updateUser } from '../api/users';

const Register = ({ navigation }: { navigation: { push: Function } }) => {
    const [userEmail, setUserEmail] = useState('')
    const [userName, setUsername] = useState('')
    const [userSurname, setUserSurname] = useState('')
    const [userResidence, setUserResidence] = useState('')
    const [userPw, setPwname] = useState('')
    const [, setUser] = useUserContext()

    const registerAccess = async (userEmail: string, userPw: string) => {
        const uid = await signUp(userEmail, userPw)
        console.log(uid)
        if (uid.substr(0, 8) === "Firebase") {
            alert("Error al registrarse")
        } else {
            updateUser(uid, {
                id: uid,
                email: userEmail,
                name: userName,
                surname: userSurname,
                residance: userResidence
            })
            getUserById(uid).then((res: any) => setUser(res))
            await navigation.push('mainPage')
        }
    }

    return (
        <GrayBox>
            <RegisterTitle>Registro</RegisterTitle>
            <InputLogin placeholder="email" value={userEmail} onChangeText={e => setUserEmail(e)} />
            <InputLogin placeholder="nombre" value={userName} onChangeText={e => setUsername(e)} />
            <InputLogin placeholder="apellidos" value={userSurname} onChangeText={e => setUserSurname(e)} />
            <InputLogin placeholder="Lugar de residencia" value={userResidence} onChangeText={e => setUserResidence(e)} />
            <InputLogin placeholder="password" secureTextEntry={true} value={userPw} onChangeText={e => setPwname(e)} />
            <LoginButton onPress={() => registerAccess(userEmail, userPw)}><Text>Registrate</Text></LoginButton>
        </GrayBox>
    );
};

export default Register;