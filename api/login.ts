import { db } from "./firebase";
import { doc, getDoc, getDocs, collection, updateDoc, deleteDoc, addDoc, query, where } from "firebase/firestore";

const collectionName = 'users';

// CREATE
export const createUser = async (obj) => {
    const colRef = collection(db, collectionName);
    const data = await addDoc(colRef, obj);
    return data.id;
}

// UPDATE
export const updateUser = async (id, obj) => {
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, obj)
}

// READ
export const getUsers = async () => {
    const colRef = collection(db, collectionName);
    const result = await getDocs(query(colRef));
    return getArrayFromCollection(result);
}

export const getUserById = async (id) => {
    const docRef = doc(db, collectionName, id);
    const result = await getDoc(docRef);
    return result.data();
}

// DELETE
export const deleteUser = async (id) => {
    const docRef = doc(db, collectionName, id);
    await deleteDoc(docRef);
}

const getArrayFromCollection = (collection) => {
    return collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });
}