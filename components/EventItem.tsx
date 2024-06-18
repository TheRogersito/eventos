import { Pressable, Text } from "react-native"
import type { AppEvent } from "../types.d.ts"
import { EventPress, EventText, EventWrapper } from "./styles/EventItem.ts"

const EventItem = ({ item: { name } }: { item: AppEvent }) => {
    return (
        <EventWrapper>
            <EventText>{name}</EventText>
            <EventPress>
                <EventText>Join</EventText>
            </EventPress>
        </EventWrapper>
    )
}

export default EventItem