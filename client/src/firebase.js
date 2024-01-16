// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-estate-8dc7c.firebaseapp.com",
    projectId: "mern-estate-8dc7c",
    storageBucket: "mern-estate-8dc7c.appspot.com",
    messagingSenderId: "587100253890",
    appId: "1:587100253890:web:66307a5116a9e363f7155b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);