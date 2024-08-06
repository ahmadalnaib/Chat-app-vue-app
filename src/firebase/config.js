import { initializeApp } from 'firebase/app';
import { getFirestore, serverTimestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBCb0HJqQ8ZjC3v1XsbLyXqRdV85MpbQOQ",
  authDomain: "udemy-vue-firsbase-sites.firebaseapp.com",
  projectId: "udemy-vue-firsbase-sites",
  storageBucket: "udemy-vue-firsbase-sites.appspot.com",
  messagingSenderId: "847986075232",
  appId: "1:847986075232:web:e144a67a43eac78db58505"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db=getFirestore();
const auth=getAuth();

export { db, auth };