import { initializeApp } from "firebase/app";
import { getFirestore, query} from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBCD7QdBBpppiNpPV1y3Bt4t5x2qa6f91k",
  authDomain: "dorma-ddaf7.firebaseapp.com",
  projectId: "dorma-ddaf7",
  storageBucket: "dorma-ddaf7.appspot.com",
  messagingSenderId: "624511844888",
  appId: "1:624511844888:web:9ce441186da81cc568b96d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth=getAuth(app);
const provider = new GoogleAuthProvider();
const storage=getStorage(app);

export {auth, provider, db, query, storage};