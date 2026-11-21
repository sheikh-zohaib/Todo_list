import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "APNA_API_KEY_YAHAN_DALO",
  authDomain: "APNA_PROJECT.firebaseapp.com",
  projectId: "APNA_PROJECT_ID",
  storageBucket: "APNA_PROJECT.appspot.com",
  messagingSenderId: "APNA_SENDER_ID",
  appId: "APNA_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
