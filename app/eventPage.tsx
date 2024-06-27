import { useLocalSearchParams } from "expo-router";
import { Container } from "../components/styles";
import { Text, View, FlatList, TextInput, Pressable } from 'react-native';
import { EventTitle, AttendantsTitle, ItemTextInput, ItemPressable } from '../components/styles/EventPageStyle';
import { ProfileBackLink } from '../components/styles/Profile';
import { useEffect, useState } from "react";
import { getUserById } from '../api/users';
import EventPageAttendant from "../components/EventPageAttendant";
import { createItemForEvent, getItemsfromEvent } from '../api/events';
import { useUserContext } from '../providers/UserProvider';
import EventItemList from "../components/EventItemList";
import { User } from "../types";

const EventPage = () => {
    const [user] = useUserContext()
    const [people, setPeople] = useState([])
    const [llevar, setLlevar] = useState('')
    const [items, setItems] = useState([])
    const event: { attendants: string, id: string, name: string } = useLocalSearchParams();
    const attendantsId = event.attendants.split(',')


    useEffect(() => {
        const arrayGente: User[] = []
        attendantsId.map((id: string) => {
            getUserById(id).then(data => arrayGente.push(data))
        });
        setPeople(arrayGente)
        getItemsfromEvent(event.id).then(data => setItems(data))
    }, [])
    console.log(people)

    const newItemForEvent = () => {
        alert(`Has añadido ${llevar} a la lista de cosas que vas a llevar`)
        createItemForEvent(event.id, { userId: user.id, userName: user.name, userSurname: user.surname, item: llevar, createdAt: new Date() })
        getItemsfromEvent(event.id).then(data => setItems(data))
        setLlevar('')
    }

    return (
        <>
            <ProfileBackLink href="mainPage">Volver</ProfileBackLink>
            <Container>
                <EventTitle>{event.name}</EventTitle>
                <View>
                    <AttendantsTitle>Que voy a llevar</AttendantsTitle>
                    <ItemTextInput value={llevar} onChangeText={e => setLlevar(e)} placeholder="Cosa que vas a llevar" />
                    <ItemPressable onPress={newItemForEvent}><Text>Añadir</Text></ItemPressable>
                </View>
                <View>
                    <AttendantsTitle>Integrantes</AttendantsTitle>
                    <FlatList
                        data={people}
                        renderItem={EventPageAttendant}
                        keyExtractor={item => item.id}
                    />
                </View>
                <View>
                    <AttendantsTitle>Cosas que lleva la gente</AttendantsTitle>
                    {items.map(item => {
                        return <>
                            <EventItemList item={item} />
                        </>
                    })}
                </View>
            </Container>
        </>
    );
};

export default EventPage;

