// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCx4kmpH7A34mZtRohoHT55MkzlR62H1Vs",
  authDomain: "a2-e36aa.firebaseapp.com",
  projectId: "a2-e36aa",
  storageBucket: "a2-e36aa.appspot.com",
  messagingSenderId: "153839718256",
  appId: "1:153839718256:web:28fe4d80e1e7ae3be049b5",
  measurementId: "G-FB5C48R86V"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
