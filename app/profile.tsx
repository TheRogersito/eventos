import { View, Text } from "react-native";
import { useUserContext } from "../providers/UserProvider";
import { ProfileBox, ProfileBackLink, ProfileTitle, ProfileSection } from '../components/styles/Profile';

const Profile = () => {
    const [user] = useUserContext()
    console.log(user)

    return (
        <>
            <ProfileBackLink href="mainPage">Volver</ProfileBackLink>
            <ProfileBox>
                <ProfileTitle>Perfil</ProfileTitle>
                <ProfileSection>Nombre: {user.name}</ProfileSection>
                <ProfileSection>Apellidos: {user.surname}</ProfileSection>
                <ProfileSection>Correo electrónico: {user.email}</ProfileSection>
                <ProfileSection>Lugar de residencia: {user.residance}</ProfileSection>
            </ProfileBox>
        </>
    );
};

export default Profile;