import {initializeApp} from "firebase/app";
import {firebaseConfig} from './firebaseConfig';
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";


let firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);