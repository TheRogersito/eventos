import { initializeApp } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { getFirestore, collection, doc, getDoc, setDoc, getDocs, query, updateDoc, deleteDoc, addDoc, where, onSnapshot } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

export { collection, doc, getDoc, setDoc, getDocs, query, updateDoc, deleteDoc, addDoc, where, onSnapshot };

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY as string,
    authDomain: `${import.meta.env.VITE_PROJECT_ID}.firebaseapp.com` as string,
    projectId: import.meta.env.VITE_PROJECT_ID as string,
    storageBucket: `${import.meta.env.VITE_PROJECT_ID}.appspot.com` as string,
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(firebaseApp);
export const storage = getStorage(firebaseApp);

// Uncomment the following line if you want the user to remain logged in and access their ID from any page until they explicitly log out or close the browser
setPersistence(auth, browserLocalPersistence);