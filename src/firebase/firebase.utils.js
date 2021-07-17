import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCkvJadNRP9qLkHfp2tSqXr5lBWEybRycs",
  authDomain: "e-commerce-project-db-baa25.firebaseapp.com",
  projectId: "e-commerce-project-db-baa25",
  storageBucket: "e-commerce-project-db-baa25.appspot.com",
  messagingSenderId: "1016061858464",
  appId: "1:1016061858464:web:2e9259d6008cadd2f42fc5",
  measurementId: "G-E0PZBVQ1XT",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
