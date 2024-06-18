import { useEffect, useState } from "react"
import { FlatList } from "react-native"
import EventItem from "./EventItem"
import { Container, Title } from "./styles"
import { NewEventLink, ProfileLink } from './styles/Events';
import type { AppEvent } from "../types"
import { getEvents } from "../api/events"

const Events = () => {
    const [events, setEvents] = useState<AppEvent[]>([])

    useEffect(() => {
        getEventList()
    }, [])

    const getEventList = async () => {
        const list = await getEvents()
        setEvents(list)
    }

    return (
        <Container>
            <ProfileLink href="/profile">FESFW</ProfileLink>
            <Title>Listado de eventos</Title>
            <FlatList
                data={events}
                renderItem={EventItem}
                keyExtractor={item => item.id}
            />
            <NewEventLink href='/create'>
                Create event
            </NewEventLink>
        </Container>
    )
}

export default Events