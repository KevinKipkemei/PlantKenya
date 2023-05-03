import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyAKc4J5DyQ7uqvKOFLezFedojFhGUs-kGU",
  authDomain: "plant-kenya.firebaseapp.com",
  projectId: "plant-kenya",
  storageBucket: "plant-kenya.appspot.com",
  messagingSenderId: "378518123545",
  appId: "1:378518123545:web:f6ad2991186fad9d712688",
  measurementId: "G-3C05NX7GZ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);

