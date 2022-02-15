import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyC59kMRqBlt4JxAfGHTtK6Qf63xerXGm5I",
  authDomain: "matang-db.firebaseapp.com",
  projectId: "matang-db",
  storageBucket: "matang-db.appspot.com",
  messagingSenderId: "268853703858",
  appId: "1:268853703858:web:4910e87e5c357eb2d445ab",
  measurementId: "G-3PCS4JJ6HX"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;