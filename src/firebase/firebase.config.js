// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMsxb9je368orM74AfGX7U10YSmJ5L4ZE",
  authDomain: "coffee-client-app-3b8a2.firebaseapp.com",
  projectId: "coffee-client-app-3b8a2",
  storageBucket: "coffee-client-app-3b8a2.firebasestorage.app",
  messagingSenderId: "561862504139",
  appId: "1:561862504139:web:76c1c3afe5aebbdaf8754e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
