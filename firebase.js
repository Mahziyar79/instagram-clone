// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2Y6Cs7oqGnl2l3jhZLQ10LcuG5Oeym7I",
  authDomain: "instagram-clone-f235a.firebaseapp.com",
  projectId: "instagram-clone-f235a",
  storageBucket: "instagram-clone-f235a.appspot.com",
  messagingSenderId: "247485287331",
  appId: "1:247485287331:web:c416ae647f4b3cc96b2816",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
