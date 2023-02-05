// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_HIPCr-P85c9tuezx-asx1wXr842qr3k",
  authDomain: "sansaptak-b8665.firebaseapp.com",
  projectId: "sansaptak-b8665",
  storageBucket: "sansaptak-b8665.appspot.com",
  messagingSenderId: "973109692215",
  appId: "1:973109692215:web:ab24672eac6112c5437cb2",
  measurementId: "G-EYJSN8WKVJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);