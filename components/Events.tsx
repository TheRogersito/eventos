import { useState } from "react"
import { View, Text, FlatList } from "react-native"

import data from '../events.json'
import EventItem from "./EventItem"

const Events = () => {
    const [events, setEvents] = useState([])


    return (
        <View>
            <FlatList
                data={data.events}
                renderItem={EventItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default Events