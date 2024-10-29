import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXke8s0wuwlgBMdmpRcj863NaFrBXxfBw",
  authDomain: "app-diety.firebaseapp.com",
  projectId: "app-diety",
  storageBucket: "app-diety.appspot.com",
  messagingSenderId: "133474205584",
  appId: "1:133474205584:web:c3519f719e48a398487d15"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
