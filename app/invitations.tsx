import { useLocalSearchParams } from 'expo-router';
import { InvitationsBox, InvitationsBackLink, InvitationsTitle } from '../components/styles/Invitations';

const Invitations = () => {

    const invitations = useLocalSearchParams();

    console.log(invitations, "maos")

    return (
        <>
            <InvitationsBackLink href="mainPage">Volver</InvitationsBackLink>
            <InvitationsTitle>Invitaciones</InvitationsTitle>
            <InvitationsBox>

            </InvitationsBox>
            <InvitationsBox>

            </InvitationsBox>
        </>
    );
};

export default Invitations;