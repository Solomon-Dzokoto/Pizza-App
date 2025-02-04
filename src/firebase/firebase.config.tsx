// Import the functions you need from the SDKs you need
import {  initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "pizza-38a15.firebaseapp.com",
  projectId: "pizza-38a15",
  storageBucket: "pizza-38a15.firebasestorage.app",
  messagingSenderId: "91980792791",
  appId: "1:91980792791:web:a4f7bc790f338520ef8192",
  measurementId: "G-3EZDYLJGBN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
