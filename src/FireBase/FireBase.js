// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCssCAElKEksTXbEl2s8JB-OgdF5I6AmMo",
  authDomain: "pixel-click-photographer.firebaseapp.com",
  projectId: "pixel-click-photographer",
  storageBucket: "pixel-click-photographer.appspot.com",
  messagingSenderId: "132677590576",
  appId: "1:132677590576:web:04175019bbad01d5bf97f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;