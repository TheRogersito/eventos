import { Text } from "react-native";
import { ListItem } from './styles/EventPageStyle';
import { useUserContext } from "../providers/UserProvider";

const EventItemList = ({ item }: { item: { userId: string, item: string, userName: string, userSurname: string } }) => {

    const [user] = useUserContext()

    return (
        <ListItem isUserActive={user.id === item.userId}>
            <Text>
                {item.userName} {item.userSurname}
            </Text>
            <Text>
                {item.item}
            </Text>
        </ListItem>
    );
};

export default EventItemList;