import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD0Zs0FD6RAWLcSSlomZRfOXdzIHiy3mQk",
  authDomain: "lesson-9-ced74.firebaseapp.com",
  databaseURL: "https://lesson-9-ced74.firebaseio.com",
  projectId: "lesson-9-ced74",
  storageBucket: "",
  messagingSenderId: "171380821484",
  appId: "1:171380821484:web:a00df035c8762b44"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
