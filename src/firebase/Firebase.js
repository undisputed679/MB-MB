// import firebase from 'firebase/app'; 
// import 'firebase/firestore';
// import 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config ={
    apiKey: "AIzaSyA2SD9vKhUAACJQHLy8aFuxVjdB2pnAflg",
    authDomain: "mbandmb-6764a.firebaseapp.com",
    projectId: "mbandmb-6764a",
    storageBucket: "mbandmb-6764a.appspot.com",
    messagingSenderId: "648555207522",
    appId: "1:648555207522:web:8153dad13c5de6a7982a3b",
    measurementId: "G-9KVJ8TTMHF"
  };

firebase.initializeApp(config);
export const auth = firebase.auth();    
export const firestore =firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle=()=>auth.signInWithPopup(provider);
export default firebase;