import firebase from "firebase";
// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD7vwFpUQQpmP_jhBCssWFHlT5O8Qc_AsE",
  authDomain: "test-1-6c429.firebaseapp.com",
  projectId: "test-1-6c429",
  storageBucket: "test-1-6c429.appspot.com",
  messagingSenderId: "861993823512",
  appId: "1:861993823512:web:eb950d63b8a15d79fe026d"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
