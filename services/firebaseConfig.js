import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD3DT27E92y6-PHFYXrfTm5w56FDMYLZYk",
  authDomain: "banco-84f40.firebaseapp.com",
  projectId: "banco-84f40",
  storageBucket: "banco-84f40.appspot.com",
  messagingSenderId: "429607346514",
  appId: "1:429607346514:web:a98d17cb4601c2249c9a8b"
};
 
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { firebaseApp, db };