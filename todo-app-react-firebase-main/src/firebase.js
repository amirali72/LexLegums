// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHHzls8P8P6eVMgxYabe1dFimgsQWvXS0",
  authDomain: "todo-new-ac6f4.firebaseapp.com",
  projectId: "todo-new-ac6f4",
  storageBucket: "todo-new-ac6f4.appspot.com",
  messagingSenderId: "235790695611",
  appId: "1:235790695611:web:7aebeca7bed9030c2a7d9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)