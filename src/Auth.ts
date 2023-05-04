// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMI33yj9nOh7PPAMlNUe5n4W9T1Oo8V-4",
  authDomain: "eda-d2eae.firebaseapp.com",
  databaseURL: "https://eda-d2eae-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "eda-d2eae",
  storageBucket: "eda-d2eae.appspot.com",
  messagingSenderId: "1067509155363",
  appId: "1:1067509155363:web:aae8f98d6e8c424753d396",
  measurementId: "G-DV7G7EV568"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth , analytics, app}