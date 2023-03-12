// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth";
import {getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDolTVux7vW4hpNV8GJfW9bPp9dYp6xZtQ",
  authDomain: "chat-box-94558.firebaseapp.com",
  projectId: "chat-box-94558",
  storageBucket: "chat-box-94558.appspot.com",
  messagingSenderId: "800192897553",
  appId: "1:800192897553:web:7fed85bb451e395c3b87b0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);