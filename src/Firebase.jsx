// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { FacebookAuthProvider, GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKS0dv2ac2Ve1f5iIJZb7fhxadH6sLNxE",
  authDomain: "mycft-c681e.firebaseapp.com",
  projectId: "mycft-c681e",
  storageBucket: "mycft-c681e.appspot.com",
  messagingSenderId: "423106282826",
  appId: "1:131027516563:web:7cdf9e74415913e6dfadb3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app); 
export const google_provider = new GoogleAuthProvider();
export const facebook_provider = new FacebookAuthProvider();
