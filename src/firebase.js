import firebase from "firebase";
For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKxs_xyNcIpN1rEBPK1gYJcC9G67fLHuw",
  authDomain: "stacksagar.firebaseapp.com",
  projectId: "stacksagar",
  storageBucket: "stacksagar.appspot.com",
  messagingSenderId: "771346616933",
  appId: "1:771346616933:web:23e608e2b0ef48a2e4ec8c",
  measurementId: "G-XYS5Y8TM0C",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth }; 










