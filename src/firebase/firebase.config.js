// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCY4JYNfdLwEtpOx1MlrmGWalYHsqwLWVQ",
    authDomain: "language--exchange-a-11.firebaseapp.com",
    projectId: "language--exchange-a-11",
    storageBucket: "language--exchange-a-11.firebasestorage.app",
    messagingSenderId: "353486214116",
    appId: "1:353486214116:web:ddda9f04df6a3d9a65adf1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;