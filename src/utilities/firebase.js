// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj_vjKqN8LKRfABrQhpwaY2y5GRLb_nsA",
  authDomain: "fir-auth-yt-2c79f.firebaseapp.com",
  projectId: "fir-auth-yt-2c79f",
  storageBucket: "fir-auth-yt-2c79f.appspot.com",
  messagingSenderId: "546835320766",
  appId: "1:546835320766:web:a27e3eaec3a2915dea33ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app