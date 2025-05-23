import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2LFfP0bqUpyv0J73PxWsQxVQRHFJgllHo",
  authDomain: "pinfTmarket.firebaseapp.com",
  projectId: "pinfTmarket",
  storageBucket: "pinfTmarket.appspot.com",
  messagingSenderId: "79815613305",
  appId: "1:79815613305:web:0d06762da5111f36d6ada8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
