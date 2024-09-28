
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDb2PI8esGpDTNAo6KKZzpu6XN_EMf9SRk",
  authDomain: "khoi-ca1a5.firebaseapp.com",
  projectId: "khoi-ca1a5",
  storageBucket: "khoi-ca1a5.appspot.com",
  messagingSenderId: "9161317899",
  appId: "1:9161317899:web:0efd3be0842253ad3b310e",
  measurementId: "G-D2LFPR7R36"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
