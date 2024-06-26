import { useEffect, useState } from "react"
import { FlatList, Text } from "react-native"
import EventItem from "./EventItem"
import { Container, Title } from "./styles"
import { NewEventLink, ProfileLink, InvitationsLink } from './styles/Events';
import type { AppEvent } from "../types"
import { getEvents, getEventsByUser } from '../api/events';
import { useUserContext } from "../providers/UserProvider";

const Events = () => {
    const [events, setEvents] = useState<AppEvent[]>([])
    const [user] = useUserContext()

    useEffect(() => {
        console.log(user)
        getEventList()
    }, [user])

    const getEventList = async () => {
        const list = await getEventsByUser(user.id)
        setEvents(list)
    }

    return (
        <>
            <ProfileLink href='/profile'>P</ProfileLink>
            <Container>
                <Title>Listado de eventos</Title>
                <FlatList
                    data={events}
                    renderItem={EventItem}
                    keyExtractor={item => item.id}
                />
                <NewEventLink href='/create'>
                    Create event
                </NewEventLink>
                <InvitationsLink href={{ pathname: "/invitations" }}>
                    Invitations
                </InvitationsLink>
            </Container>
        </>
    )
}

export default Events