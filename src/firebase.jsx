// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkJ881lf6s5hQokPHyDy6lnrIG5Wh72XA",
  authDomain: "trueiron-bdb2e.firebaseapp.com",
  projectId: "trueiron-bdb2e",
  storageBucket: "trueiron-bdb2e.firebasestorage.app",
  messagingSenderId: "1004126244600",
  appId: "1:1004126244600:web:df3c0875d0d7b6cc68350d",
  measurementId: "G-3CZ7JL70PQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics and Firestore
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, analytics};
