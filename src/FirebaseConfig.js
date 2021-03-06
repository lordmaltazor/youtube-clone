import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
    apiKey: "AIzaSyDzhyM9tKzvTtLX7Nb8QvkJjDg4chCxThY",
    authDomain: "video-website-7d3ef.firebaseapp.com",
    projectId: "video-website-7d3ef",
    storageBucket: "video-website-7d3ef.appspot.com",
    messagingSenderId: "984504137450",
    appId: "1:984504137450:web:6c2cd33d704918de540993"
})

const firestore = firebase.firestore();
const auth = firebase.auth();

export { firestore, auth };