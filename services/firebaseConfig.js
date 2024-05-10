
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtcnghS32ILJv0j_22ce-h9OgM4ICE4-k",
  authDomain: "projbanco-eaea3.firebaseapp.com",
  projectId: "projbanco-eaea3",
  storageBucket: "projbanco-eaea3.appspot.com",
  messagingSenderId: "593631478483",
  appId: "1:593631478483:web:9cebd2bb66f20cfa07ca26"
};

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)

export {firebaseApp, db}