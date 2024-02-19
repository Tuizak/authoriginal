import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB51pVHVuFChrQ1TuwNEPWTl3WQfqyPpxs",
  authDomain: "tuizak.firebaseapp.com",
  projectId: "tuizak",
  storageBucket: "tuizak.appspot.com",
  messagingSenderId: "616400766050",
  appId: "1:616400766050:web:f8496b40b7edfe6be17d3b",
  measurementId: "G-MGMGH3885X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);  