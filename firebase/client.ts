// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTSmJeIT4kqjWgQ30qCBS9MGzDh2hH5AE",
  authDomain: "echo-mate-29732.firebaseapp.com",
  projectId: "echo-mate-29732",
  storageBucket: "echo-mate-29732.firebasestorage.app",
  messagingSenderId: "928491785794",
  appId: "1:928491785794:web:a68fbf856f4aec06d4a7db",
  measurementId: "G-R1G3HFXLLT"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);