import { useEffect, useState } from "react"
import { FlatList, Text } from "react-native"
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
            </Container>
        </>
    )
}

export default Events