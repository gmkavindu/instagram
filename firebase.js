// Import the functions you need from the SDKs you need
import { initializeApp, getApps,  getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD-XmRJidR1uRs2kFgMDzV1ZVW9yn3KnI",
  authDomain: "insta-2-clone-a5f56.firebaseapp.com",
  projectId: "insta-2-clone-a5f56",
  storageBucket: "insta-2-clone-a5f56.appspot.com",
  messagingSenderId: "706754753988",
  appId: "1:706754753988:web:4f0a733a6958c839886091"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };