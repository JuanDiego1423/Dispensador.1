// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
 const FirebaseConfig = {
  apiKey: "AIzaSyDG4FG9C4YOkyBEatMoF8vuoEg3uNcVKe8",
  authDomain: "proyecto-12-2af08.firebaseapp.com",
  projectId: "proyecto-12-2af08",
  storageBucket: "proyecto-12-2af08.appspot.com",
  messagingSenderId: "731555120993",
  appId: "1:731555120993:web:e90fee13c96efd4c4e2720"
};

// Initialize Firebase
const app = initializeApp(FirebaseConfig);
const bd = getFirestore(app);

export default {
  app,bd
}