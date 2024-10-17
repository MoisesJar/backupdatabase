// firebaseConfig.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js';
import {
	getFirestore,
	collection,
	addDoc,
	getDocs,
} from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js';

// Configuración de Firebase obtenida desde Firebase Console
const firebaseConfig = {
	apiKey: "AIzaSyC7M127bjwHRR_goa7Cg_fEWNFMrqBOVUI",
  authDomain: "proyecto-gamers-family.firebaseapp.com",
  projectId: "proyecto-gamers-family",
  storageBucket: "proyecto-gamers-family.appspot.com",
  messagingSenderId: "523340857163",
  appId: "1:523340857163:web:8691416c108b9a5f9e72ce",
  measurementId: "G-HMDCT3NBH0"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
