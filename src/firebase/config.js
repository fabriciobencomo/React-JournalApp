// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFt2Q-vW4qXIQIfN0tKyp_gi8F1RzJWOo",
  authDomain: "react-curso-9c1cb.firebaseapp.com",
  projectId: "react-curso-9c1cb",
  storageBucket: "react-curso-9c1cb.appspot.com",
  messagingSenderId: "698601091068",
  appId: "1:698601091068:web:406cd0f264d3f493fd4c79",
  measurementId: "G-4GYRY344EH"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)