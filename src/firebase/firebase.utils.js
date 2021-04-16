import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyARRyjQAxMtuliuEQXXzNXC7tXPE_m3svw",
  authDomain: "crown-db-58b3b.firebaseapp.com",
  projectId: "crown-db-58b3b",
  storageBucket: "crown-db-58b3b.appspot.com",
  messagingSenderId: "13583223672",
  appId: "1:13583223672:web:33d5d3780e0f0e3e12568d",
  measurementId: "G-XKYEHZQCXJ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
