import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDfZW_J_Jh7LCWfabdETi14F-LYiaNvl8s",
  authDomain: "contact-form-f893f.firebaseapp.com",
  databaseURL: "https://contact-form-f893f.firebaseio.com",
  projectId: "contact-form-f893f",
  storageBucket: "contact-form-f893f.appspot.com",
  messagingSenderId: "568535523396",
  appId: "1:568535523396:web:c964f77e6ad00d11499c11",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
