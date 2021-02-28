import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtr-iU5Iex0JokUdf3NGFCANZo9Lg3cwg",
  authDomain: "sagar-clone-1.firebaseapp.com",
  projectId: "sagar-clone-1",
  storageBucket: "sagar-clone-1.appspot.com",
  messagingSenderId: "797814508715",
  appId: "1:797814508715:web:4d07ccad6e81ba3843fbee",
  measurementId: "G-BQC2DMWMZE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
export const db = firebaseApp.firestore()
export const auth = firebaseApp.auth()