import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyDBX3bGm_KoUz6bS6O_4R6YowCDJVVtYyg",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "netflix-f2216.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "netflix-f2216",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "netflix-f2216.firebasestorage.app",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "836251547657",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:836251547657:web:0ffe310521d7654e8a60d8",
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID || "G-RP06CLNBWT"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
