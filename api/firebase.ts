import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";

const apiKey = "eventos-dc5a7"
const projectId = "AIzaSyD49uSdxq4xz4yFR4AaHOeZwXK-c9yEpOo"

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