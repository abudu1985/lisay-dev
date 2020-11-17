import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firebase-firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAyNIh9b85fW2GCDiRLykUBjxp9dp_KFLQ",
    authDomain: "lisay-dev.firebaseapp.com",
    databaseURL: "https://lisay-dev.firebaseio.com",
    projectId: "lisay-dev",
    storageBucket: "lisay-dev.appspot.com",
    messagingSenderId: "273553266677",
    appId: "1:273553266677:web:6eb7a4695beb8fac0932bc",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
