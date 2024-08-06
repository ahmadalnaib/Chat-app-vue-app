import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBCb0HJqQ8ZjC3v1XsbLyXqRdV85MpbQOQ",
  authDomain: "udemy-vue-firsbase-sites.firebaseapp.com",
  projectId: "udemy-vue-firsbase-sites",
  storageBucket: "udemy-vue-firsbase-sites.appspot.com",
  messagingSenderId: "847986075232",
  appId: "1:847986075232:web:e144a67a43eac78db58505"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };