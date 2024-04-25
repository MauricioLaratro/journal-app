// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: GOOGLE_API,
  authDomain: "journalapp-755b5.firebaseapp.com",
  projectId: "journalapp-755b5",
  storageBucket: "journalapp-755b5.appspot.com",
  messagingSenderId: "84681531388",
  appId: "1:84681531388:web:9922d19a7a69976bb49c79"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp )
export const FirebaseDB = getFirestore( FirebaseApp )