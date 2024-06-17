import { Pressable, Text, View } from "react-native"
import type { AppEvent } from "../types.d.ts"

const EventItem = ({ item: { name } }: { item: AppEvent }) => {
    return (
        <View>
            <Text>{name}</Text>
            <Pressable>
                <Text>Join</Text>
            </Pressable>
        </View>
    )
}

export default EventItem