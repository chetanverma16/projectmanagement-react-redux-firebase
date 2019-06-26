import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBtdN-9kxrVpDC-DuZeC4uEl1qd8nT8OTk",
    authDomain: "projectmanagement-redux.firebaseapp.com",
    databaseURL: "https://projectmanagement-redux.firebaseio.com",
    projectId: "projectmanagement-redux",
    storageBucket: "",
    messagingSenderId: "652690129280",
    appId: "1:652690129280:web:3367d00c9320149b"
};
firebase.initializeApp(config);

export default firebase;