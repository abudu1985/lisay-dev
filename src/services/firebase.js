// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
// We only want to use Firebase Auth here
import "firebase/auth";
import 'firebase/firebase-firestore'

// Your app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAyNIh9b85fW2GCDiRLykUBjxp9dp_KFLQ",
    authDomain: "lisay-dev.firebaseapp.com",
    databaseURL: "https://lisay-dev.firebaseio.com",
    projectId: "lisay-dev",
    storageBucket: "lisay-dev.appspot.com",
    messagingSenderId: "273553266677",
    appId: "1:273553266677:web:6eb7a4695beb8fac0932bc",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Finally, export it to use it throughout your app
export default firebase;
