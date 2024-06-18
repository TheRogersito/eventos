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