// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCK9kMsTpQ5N676to1x-ItDIR5fZqQq_Nc",
  authDomain: "netflixai-dffa4.firebaseapp.com",
  projectId: "netflixai-dffa4",
  storageBucket: "netflixai-dffa4.appspot.com",
  messagingSenderId: "1030980231161",
  appId: "1:1030980231161:web:3e91666e21bd24e5e96728",
  measurementId: "G-DTLPCGP8NX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();