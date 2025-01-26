// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwBj9t2o4OdHMdWVP7mbVdERS9UvcT6qw",
  authDomain: "smit-final-hackathon-3a78a.firebaseapp.com",
  projectId: "smit-final-hackathon-3a78a",
  storageBucket: "smit-final-hackathon-3a78a.firebasestorage.app",
  messagingSenderId: "706576628564",
  appId: "1:706576628564:web:02928610b31d7e5bbfe6c1",
  measurementId: "G-5QJ623Y26Y"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
