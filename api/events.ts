import { addDoc, collection, getDocs, query } from "firebase/firestore"
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

export const getInviationsByUser = async (user: string) => {
    const res = await getDocs(query(colRef))
    console.log(user, "feofeofeo")
    const allEvents = getArrayFromCollection(res)
    const filteredEvents = allEvents.filter((event: { invited: string[] }) => event.invited.includes(user))
    console.log(filteredEvents, "Dentro de la funcion")
    return filteredEvents
}