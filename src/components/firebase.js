import firebase from "firebase";
// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC_NnihJewkEwVfVZj8GTp6mzru6TMtKOM",
    authDomain: "test-2-84738.firebaseapp.com",
    projectId: "test-2-84738",
    storageBucket: "test-2-84738.appspot.com",
    messagingSenderId: "171089092952",
    appId: "1:171089092952:web:acec6752857460374a052d"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
