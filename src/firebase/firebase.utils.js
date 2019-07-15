import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  // apiKey: 'AIzaSyCdHT-AYHXjF7wOrfAchX4PIm3cSj5tn14',
  // authDomain: 'crwn-db.firebaseapp.com',
  // databaseURL: 'https://crwn-db.firebaseio.com',
  // projectId: 'crwn-db',
  // storageBucket: 'crwn-db.appspot.com',
  // messagingSenderId: '850995411664',
  // appId: '1:850995411664:web:7ddc01d597846f65'
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
