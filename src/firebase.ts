
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCnTyhKTz76N5xICrT2Qes3S1dLjSj1L5Q",
    authDomain: "wendy-shop-12a3c.firebaseapp.com",
    projectId: "wendy-shop-12a3c",
    storageBucket: "wendy-shop-12a3c.appspot.com",
    messagingSenderId: "281461601079",
    appId: "1:281461601079:web:7e1f06c67b21f5131ea0b2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore(app);
export const storage = getStorage(app)