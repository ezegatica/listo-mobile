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

if (!firebase.apps.length) {
    firebase.initializeApp({apiKey: "AIzaSyAcPMH0qYuAqvTCJaq9LSLZECh0V9cApV0",
    authDomain: "prueba-proyecto-tic.firebaseapp.com",
    databaseURL: "https://prueba-proyecto-tic.firebaseio.com",
    projectId: "prueba-proyecto-tic",
    storageBucket: "prueba-proyecto-tic.appspot.com",
    messagingSenderId: "68477335290",
    appId: "1:68477335290:web:fb7914e85889cc30293b43"});
}
const db = firebase.firestore();
const auth = firebase.auth();
const fb = firebase;
export {firebase as default, auth, db, fb}