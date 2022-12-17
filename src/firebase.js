// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtBi8Rn3NQRTqLAWas2tSo3gFA6uNQ_U4",
  authDomain: "todo-app-3854b.firebaseapp.com",
  projectId: "todo-app-3854b",
  storageBucket: "todo-app-3854b.appspot.com",
  messagingSenderId: "116343365321",
  appId: "1:116343365321:web:66ca21ad80fc633209f718",
  measurementId: "G-WHQ5LDSYJ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)