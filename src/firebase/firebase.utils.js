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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }
  return userRef;
}

export default firebase;
