import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA0aJqn4OkVwVGicKxIPWPN7eG8FFIQmSo",
  authDomain: "netflix-clone-fe3be.firebaseapp.com",
  projectId: "netflix-clone-fe3be",
  storageBucket: "netflix-clone-fe3be.appspot.com",
  messagingSenderId: "299379764862",
  appId: "1:299379764862:web:1a0d38c8bbe269af35f22f",
  measurementId: "G-0NXBWB8S11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);