// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCf4TRJy6AHbBm3RV8mmqt9CDg7FsS47D4",
  authDomain: "una-diary.firebaseapp.com",
  projectId: "una-diary",
  storageBucket: "una-diary.appspot.com",
  messagingSenderId: "544849072424",
  appId: "1:544849072424:web:fc2f80dd7199cd5f29401d",
  measurementId: "G-ZQPK3ESPND",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
