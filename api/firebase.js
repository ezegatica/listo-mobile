import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAcPMH0qYuAqvTCJaq9LSLZECh0V9cApV0",
    authDomain: "prueba-proyecto-tic.firebaseapp.com",
    databaseURL: "https://prueba-proyecto-tic.firebaseio.com",
    projectId: "prueba-proyecto-tic",
    storageBucket: "prueba-proyecto-tic.appspot.com",
    messagingSenderId: "68477335290",
    appId: "1:68477335290:web:fb7914e85889cc30293b43"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();
export const db = firebase.firestore();
export const auth = firebase.auth();

export default firebase;