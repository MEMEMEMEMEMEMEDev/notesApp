import "firebase/firestore";
import "firebase/auth";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVurvH3ihaWEDdc63DwgIkjEa4bHYZ6Ng",
  authDomain: "journalapp-2611e.firebaseapp.com",
  projectId: "journalapp-2611e",
  storageBucket: "journalapp-2611e.appspot.com",
  messagingSenderId: "924171305333",
  appId: "1:924171305333:web:69928813ba3d88da7fd33c",
};

console.log();
initializeApp(firebaseConfig);
const db = getFirestore();

const googleAuthProvider = new GoogleAuthProvider();

export { db, googleAuthProvider, doc, setDoc, collection, getDocs };
