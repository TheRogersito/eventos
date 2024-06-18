import { db, getArrayFromCollection } from "./firebase";
import { doc, getDoc, getDocs, collection, updateDoc, deleteDoc, addDoc, query, where } from "firebase/firestore";

const collectionName = 'users';

export const updateUser = async (id: string, obj: {}) => {
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, obj)
}

export const getUsers = async () => {
    const colRef = collection(db, collectionName);
    const result = await getDocs(query(colRef));
    return getArrayFromCollection(result);
}

export const getUserById = async (id: string) => {
    const docRef = doc(db, collectionName, id);
    const result = await getDoc(docRef);
    return result.data();
}

export const deleteUser = async (id: string) => {
    const docRef = doc(db, collectionName, id);
    await deleteDoc(docRef);
}
