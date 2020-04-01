import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyByHq-m3-bf2H_GIwbLMl6pxOrDWK0a168",
  authDomain: "minventory-43ce4.firebaseapp.com",
  databaseURL: "https://minventory-43ce4.firebaseio.com",
  projectId: "minventory-43ce4",
  storageBucket: "minventory-43ce4.appspot.com",
  messagingSenderId: "273907871080",
  appId: "1:273907871080:web:9490abfeb591d3b047badd"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating user...", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
