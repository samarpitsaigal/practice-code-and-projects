// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJ7XQ5ku-WnWxO7-MufKyoNh-H3NGwu1M",
  authDomain: "vite-contect-bbde8.firebaseapp.com",
  projectId: "vite-contect-bbde8",
  storageBucket: "vite-contect-bbde8.firebasestorage.app",
  messagingSenderId: "42804265494",
  appId: "1:42804265494:web:442114488a654ce7a5ab37",
  measurementId: "G-SLE9ZB33YQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);