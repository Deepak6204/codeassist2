import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBib-vLsY46atydKoOZt0gSLA__AMi1l8I",
  authDomain: "codeassist-ecf6d.firebaseapp.com",
  projectId: "codeassist-ecf6d",
  storageBucket: "codeassist-ecf6d.appspot.com",
  messagingSenderId: "631057021237",
  appId: "1:631057021237:web:d1855885d3395cdada347c",
  measurementId: "G-JD49RPRB29"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };