import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";

const apiKey = "AIzaSyD49uSdxq4xz4yFR4AaHOeZwXK-c9yEpOo"
const projectId = "eventos-dc5a7"

const firebaseConfig = {
    apiKey: apiKey as string,
    authDomain: `${projectId}.firebaseapp.com` as string,
    projectId: projectId as string,
    storageBucket: `${projectId}.appspot.com` as string,
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();

export const auth = initializeAuth(firebaseApp, {
    persistence: getReactNativePersistence(AsyncStorage),
});

export const getArrayFromCollection = (collection: { docs: { map: Function } }) => {
    return collection.docs.map((doc: { data: Function, id: string }) => {
        return { ...doc.data(), id: doc.id };
    });
}