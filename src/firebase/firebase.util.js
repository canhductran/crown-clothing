import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAVwkEQDG--9uFQGyWo_vu6a1sqTCnPQ8E",
    authDomain: "crowndb-e3cbf.firebaseapp.com",
    databaseURL: "https://crowndb-e3cbf.firebaseio.com",
    projectId: "crowndb-e3cbf",
    storageBucket: "",
    messagingSenderId: "9964207514",
    appId: "1:9964207514:web:d36a83f7507f004ed1ce23"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;