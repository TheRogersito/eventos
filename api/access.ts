import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";



export const signUp = async (email: string, password: string): Promise<string> => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        sendEmailVerification(userCredential.user);
        const user = userCredential.user;
        const docRef = doc(db, 'users', user.uid);
        await setDoc(docRef, { id: user.uid, email: user.email });
        alert('Usuario Registrado');
        return user.uid;
    } catch (err: { message: string }) {
        console.log(err.message)
        return err.message;
    }
}

export const signIn = async (email: string, password: string) => {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        alert('Usuario Logueado')
        return result.user.uid;
    } catch (err: { message: string }) {
        console.log(err.message)
        return err.message;
    }
}

export const getCurrentUserId = () => auth.currentUser?.uid;
export const logout = async () => await signOut(auth);