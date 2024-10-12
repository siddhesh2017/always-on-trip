// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo1OFmgF0w2t3RjCrvf_zFyt3N1HeXrZ4",
  authDomain: "ai-trip-planner-438014.firebaseapp.com",
  projectId: "ai-trip-planner-438014",
  storageBucket: "ai-trip-planner-438014.appspot.com",
  messagingSenderId: "788637644948",
  appId: "1:788637644948:web:c31de49ec7aa2cfc159c81",
  measurementId: "G-MHL8S9G4FB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);