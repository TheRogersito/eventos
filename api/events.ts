import { addDoc, collection, getDocs, query, doc, updateDoc, orderBy } from 'firebase/firestore';
import { db, getArrayFromCollection } from "./firebase"

const collectionName = 'events'
const colRef = collection(db, collectionName)

export const createEvent = async (data: unknown) => {
    const res = await addDoc(colRef, data)
    return res.id
}

export const getEvents = async () => {
    const res = await getDocs(query(colRef))
    return getArrayFromCollection(res)
}

export const getEventsByUser = async (userId: string) => {
    const res = await getDocs(query(colRef))
    const allEvents = getArrayFromCollection(res)
    const filteredEvents = allEvents.filter((event: { attendants: string[] }) => event.attendants.includes(userId))
    return filteredEvents
}

export const getInviationsByUser = async (userId: string) => {
    const res = await getDocs(query(colRef))
    const allEvents = getArrayFromCollection(res)
    const filteredEvents = allEvents.filter((event: { invited: string[] }) => event.invited.includes(userId))
    return filteredEvents
}

export const updateInvitation = async (updatedinvitation: {}, inviationId: string) => {
    const docRef = doc(db, collectionName, inviationId);
    await updateDoc(docRef, updatedinvitation)
}

export const createItemForEvent = async (eventId: string, data: unknown) => {
    const colRef = collection(db, collectionName, eventId, 'items')
    const res = await addDoc(colRef, data)
    return res.id
}

export const getItemsfromEvent = async (eventId: string) => {
    const colRef = collection(db, collectionName, eventId, 'items')
    const res = await getDocs(query(colRef, orderBy('createdAt', 'desc')))
    return getArrayFromCollection(res)
}