// utils/firebase.ts

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Konfiguracija iz Firebase konzole (zamijeni svojim podacima ako treba)
const firebaseConfig = {
  apiKey: "AIzaSyA2LFFP0bqUpyv0J73PxWsQxVQRHFJg1lHo",
  authDomain: "pinftmarket.firebaseapp.com",
  projectId: "pinftmarket",
  storageBucket: "pinftmarket.appspot.com",
  messagingSenderId: "79815613305",
  appId: "1:79815613305:web:0d06762da5111f36d6ada8"
};

// Inicijalizacija aplikacije i baze
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
