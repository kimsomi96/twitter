import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig={
    apiKey: "AIzaSyBqgiKzVlM07LK5BvrCoY-C4e5cRm3wiv8",
    authDomain: "twitter-clone-147c2.firebaseapp.com",
    databaseURL: "https://twitter-clone-147c2.firebaseapp.com",
    projectId: "twitter-clone-147c2",
    storageBucket: "twitter-clone-147c2.appspot.com",
    messagingSenderId: "921303996514",
    appId: "1:921303996514:web:417e2fd564df1bc8f1993b",
    measurementId: "G-Y126F109S4",
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;