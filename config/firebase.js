
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import  Constants from "expo-constants";

const firebaseConfig = {
    apiKey: "AIzaSyDy0hn_IWfxeKn5AHvHUibq1LvdXhE04mM",
    authDomain: "soutien-ga.firebaseapp.com",
    projectId: "soutien-ga",
    storageBucket: "soutien-ga.appspot.com",
    messagingSenderId: "103621757491",
    appId: "1:103621757491:web:a555cf4a39a980263f3146"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
export default app;