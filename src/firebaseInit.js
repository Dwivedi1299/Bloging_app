// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPfo8s-Vvxmyr6CFJAJmE8ox9Fzx4ChUc",
  authDomain: "blogapp-717b3.firebaseapp.com",
  projectId: "blogapp-717b3",
  storageBucket: "blogapp-717b3.appspot.com",
  messagingSenderId: "727917121283",
  appId: "1:727917121283:web:1875d58f20ebc957472336",
  measurementId: "G-N4411YMNS9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getAnalytics(app);