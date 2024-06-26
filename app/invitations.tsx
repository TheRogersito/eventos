import { InvitationsBox, InvitationsBackLink, InvitationsTitle } from '../components/styles/Invitations';
import { getInvitationsByUser, updateInvitation } from '../api/events';
import { useEffect, useState } from 'react';
import { useUserContext } from '../providers/UserProvider';
import { Text, Pressable } from 'react-native';

const Invitations = () => {

    const [user] = useUserContext()

    const [invitations, setInvitations] = useState([]);

    const getInvitations = async (user: string) => {
        const list = await getInvitationsByUser(user)
        setInvitations(list)
    }

    useEffect(() => {
        getInvitations(user.id)
    }, [])

    const acceptInvitation = (invitation: { attendants: string[], invited: string[], id: string }) => {
        const newAttendantsList = [...invitation.attendants, user.id]
        const newInvitedList = invitation.invited.splice(invitation.invited.indexOf(user.id), 1)
        updateInvitation({ ...invitation, attendants: newAttendantsList, invited: newInvitedList }, invitation.id)
    }

    return (
        <>
            <InvitationsBackLink href="mainPage">Volver</InvitationsBackLink>
            <InvitationsTitle>Invitaciones</InvitationsTitle>
            {invitations.map((invitation: { attendants: string[], invited: string[], id: string, name: string }) =>
                <InvitationsBox>
                    <Text>{invitation.name}</Text>
                    <Pressable onPress={() => acceptInvitation(invitation)}><Text>Unirse</Text></Pressable>
                </InvitationsBox>
            )}
        </>
    );
};

export default Invitations;