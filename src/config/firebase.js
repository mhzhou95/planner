import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAnZ_STIomCT5cvmcYHi2h8PCDgeB8YpCk",
  authDomain: "to-do-list-dc520.firebaseapp.com",
  databaseURL: "https://to-do-list-dc520.firebaseio.com",
  projectId: "to-do-list-dc520",
  storageBucket: "",
  messagingSenderId: "912436307559",
  appId: "1:912436307559:web:7adfa8b4f2ed28b2"
});

// get timestamps with database
// firebase.firestore().settings({ timestampsInSnapshots: true });
// update this is now done automaticly so no need to do it in settings 

export { firebaseConfig as firebase };