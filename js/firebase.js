import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc, onSnapshot, query, orderBy } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC1003mq1Ev0ns0oS-rQ0XPUqDQDzU1Lk4",
  authDomain: "data-base-5db50.firebaseapp.com",
  projectId: "data-base-5db50",
  storageBucket: "data-base-5db50.firebasestorage.app",
  messagingSenderId: "943643704670",
  appId: "1:943643704670:web:b35a0cc3d7321055be23cf",
  measurementId: "G-X1ZRD6JCC9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs, deleteDoc, doc, updateDoc, onSnapshot, query, orderBy };