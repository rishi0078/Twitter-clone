import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBOLyVZxyNPFnQwSvN3JyTX2zDAY0lcwgM",
    authDomain: "twitter-clone-deca2.firebaseapp.com",
    databaseURL: "https://twitter-clone-deca2.firebaseio.com",
    projectId: "twitter-clone-deca2",
    storageBucket: "twitter-clone-deca2.appspot.com",
    messagingSenderId: "777754131603",
    appId: "1:777754131603:web:0da597dafd42ac56f7a166",
    measurementId: "G-SJ6HS6D6Y7"
  };
   
  
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();

  export default db;