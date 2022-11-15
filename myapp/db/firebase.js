import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/compat/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDO6T0MxMhRWtQzuBqaMPCAdHtsNMxG2MA",
    authDomain: "dentist-app-c1ed6.firebaseapp.com",
    projectId: "dentist-app-c1ed6",
    storageBucket: "dentist-app-c1ed6.appspot.com",
    messagingSenderId: "983981285132",
    appId: "1:983981285132:web:10c9b58a9f806eed09b329",
    measurementId: "G-5TBPXB8B62"
};

if (!firebase.apps.length){
    const app = firebase.initializeApp(firebaseConfig); 
}


export const auth = firebase.auth();