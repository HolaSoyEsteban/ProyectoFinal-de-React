import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDczB1-Qe0GrhQdOQnTN-f6cJQU5JTGR0A",
  authDomain: "reactcomics-proyectofinal.firebaseapp.com",
  projectId: "reactcomics-proyectofinal",
  storageBucket: "reactcomics-proyectofinal.appspot.com",
  messagingSenderId: "622523121754",
  appId: "1:622523121754:web:34b6a373f7c2f7e07d1863"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;