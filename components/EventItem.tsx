import type { AppEvent } from "../types.d.ts"
import { EventLink, EventText, EventWrapper } from "./styles/EventItem.ts"

const EventItem = ({ item }: { item: AppEvent }) => {
    return (
        <EventWrapper>
            <EventText>{item.name}</EventText>
            <EventLink
                href={{
                    pathname: "/eventPage",
                    params: item,
                }}
            >
                Info
            </EventLink>
        </EventWrapper>
    )
}

export default EventItem