import { collection, addDoc } from "firebase/firestore";
import db from "./firebase-config.js";
import productos from "../productos.js";

const itemsRef = collection(db, "items");
const promises = productos.map((producto) => addDoc(itemsRef, producto));

Promise.all(promises)
    .then(() => {
        console.log("Listo! productos agregados a Firestore con exito.");
        process.exit(0);
    });