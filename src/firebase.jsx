// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4mnvERby2N0-lX1WobXSHLegEoY_Q7iM",
  authDomain: "netflix-clone-a685d.firebaseapp.com",
  projectId: "netflix-clone-a685d",
  storageBucket: "netflix-clone-a685d.appspot.com",
  messagingSenderId: "748624990399",
  appId: "1:748624990399:web:9739004cc053c9b22bf60a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);