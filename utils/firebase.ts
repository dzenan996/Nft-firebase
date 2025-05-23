import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2LFFpObqUpyv0J73PxWsQxVQRHFJg1Ho",
  authDomain: "pinfTmarket.firebaseapp.com",
  projectId: "pinfTmarket",
  storageBucket: "pinfTmarket.appspot.com",
  messagingSenderId: "79815613305",
  appId: "1:79815613305:web:0d06762da5111f36d6ada8",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
