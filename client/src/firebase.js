// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-c0b3c.firebaseapp.com",
  projectId: "mern-blog-c0b3c",
  storageBucket: "mern-blog-c0b3c.appspot.com",
  messagingSenderId: "240302650967",
  appId: "1:240302650967:web:65326dbab834cb58439512"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);