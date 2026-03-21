import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: ADD YOUR OWN FIREBASE CONFIGURATION HERE
const firebaseConfig = {
  apiKey: "AIzaSyDBX3bGm_KoUz6bS6O_4R6YowCDJVVtYyg",
  authDomain: "netflix-f2216.firebaseapp.com",
  projectId: "netflix-f2216",
  storageBucket: "netflix-f2216.firebasestorage.app",
  messagingSenderId: "836251547657",
  appId: "1:836251547657:web:0ffe310521d7654e8a60d8",
  measurementId: "G-RP06CLNBWT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
