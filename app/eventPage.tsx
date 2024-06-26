import { useLocalSearchParams } from "expo-router";
import { Container } from "../components/styles";
import { Text, View, FlatList, TextInput, Pressable } from 'react-native';
import { EventTitle, AttendantsTitle } from '../components/styles/EventPageStyle';
import { ProfileBackLink } from '../components/styles/Profile';
import { useEffect, useState } from "react";
import { getUserById } from '../api/users';
import EventPageAttendant from "../components/EventPageAttendant";
import { createItemForEvent } from '../api/events';
import { useUserContext } from '../providers/UserProvider';

const EventPage = () => {
    const [user] = useUserContext()
    const [people, setPeople] = useState([])
    const [llevar, setLlevar] = useState('')
    const event: { attendants: string, id: string } = useLocalSearchParams();
    const attendantsId = event.attendants.split(',')


    useEffect(() => {
        attendantsId.map((id: string) => {
            getUserById(id).then(data => setPeople([...people, data]))
        })
    }, [])
    console.log(llevar)

    const newItemForEvent = () => {
        createItemForEvent(event.id, { userId: user.id, item: llevar })
    }

    return (
        <>
            <ProfileBackLink href="mainPage">Volver</ProfileBackLink>
            <Container>
                <EventTitle>{event.name}</EventTitle>
                <View>
                    <AttendantsTitle>Que voy a llevar</AttendantsTitle>
                    <TextInput value={llevar} onChangeText={e => setLlevar(e)} />
                    <Pressable onPress={newItemForEvent}><Text>Añadir</Text></Pressable>
                </View>
                <View>
                    <AttendantsTitle>Integrantes</AttendantsTitle>
                    <FlatList
                        data={people}
                        renderItem={EventPageAttendant}
                        keyExtractor={item => item.id}
                    />
                </View>
            </Container>
        </>
    );
};

export default EventPage;

