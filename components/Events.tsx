import { useEffect, useState } from "react"
import { FlatList } from "react-native"

import data from '../events.json'
import EventItem from "./EventItem"
import { Container, NewEventLink, Title } from "./styles/Events"
import type { AppEvent } from "../types"

const Events = () => {
    const [events, setEvents] = useState<AppEvent[]>([])

    useEffect(() => {
        setEvents(data.events)
    }, [])


    return (
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
    )
}

export default Events