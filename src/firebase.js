// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/index";
const firebaseConfig = {

    apiKey: "AIzaSyCPT4UTkBCwTPNzC8gBoapdqZbKV0-_nfU",
  
    authDomain: "twiiter-clone-76566.firebaseapp.com",
  
    projectId: "twiiter-clone-76566",
  
    storageBucket: "twiiter-clone-76566.appspot.com",
  
    messagingSenderId: "961269444771",
  
    appId: "1:961269444771:web:38dbf63bf29eab32c94f16",
  
    measurementId: "G-2PXREHYYTF"
  
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

export default db;