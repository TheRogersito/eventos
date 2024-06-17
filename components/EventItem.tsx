import { Text, View } from "react-native"
import type { AppEvent } from "../types.d.ts"

const EventItem = ({ item: { name } }: { item: AppEvent }) => {
    return (
        <View>
            <Text>{name}</Text>
        </View>
    )
}

export default EventItem