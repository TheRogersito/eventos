import { Text, View } from "react-native";
import { AttendantListItem } from './styles/EventPageStyle';

const EventPageAttendant = ({ item }: { item: { name: string, surname: string } }) => {
    return (
        <AttendantListItem>
            <Text>
                {item.name} {item.surname}
            </Text>
        </AttendantListItem>
    );
};

export default EventPageAttendant;