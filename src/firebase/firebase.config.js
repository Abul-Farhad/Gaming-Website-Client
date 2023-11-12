// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtLeL858pY1e55xoepj6j7ITfn9LLcVy8",
  authDomain: "gaming-website-auth.firebaseapp.com",
  projectId: "gaming-website-auth",
  storageBucket: "gaming-website-auth.appspot.com",
  messagingSenderId: "670282092835",
  appId: "1:670282092835:web:f7cecc2de1fae8dde5fc96",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };
