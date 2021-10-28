// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcDPKgG_F617aRJkBKJ11zo-eR9o6Ts2U",
  authDomain: "medtech-2ecc6.firebaseapp.com",
  databaseURL: "https://medtech-2ecc6-default-rtdb.firebaseio.com",
  projectId: "medtech-2ecc6",
  storageBucket: "medtech-2ecc6.appspot.com",
  messagingSenderId: "217344381118",
  appId: "1:217344381118:web:1317709042151b902d0eef",
  measurementId: "G-XKB3S1W365",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default getFirestore()
