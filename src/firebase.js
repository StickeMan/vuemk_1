import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

let fireConfig = {
  apiKey: "AIzaSyD-L3RR3ewhVRIGTYy4W8_eezdUZxLQ5Zo",
  authDomain: "clothingapp-1501c.firebaseapp.com",
  databaseURL: "https://clothingapp-1501c-rtdb.firebaseio.com",
  projectId: "clothingapp-1501c",
  storageBucket: "clothingapp-1501c.appspot.com",
  messagingSenderId: "281185715405",
  appId: "1:281185715405:web:90268b18250137c0c21584",
  measurementId: "G-6J836MYHS0",
};

firebase.initializeApp(fireConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
