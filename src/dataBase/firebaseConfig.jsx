// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, getDocs } from "firebase/firestore"; 


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9M_byP_o27E8UeHOZo_c3mzWfvBKa7Yk",
  authDomain: "sap-aquel-manzano.firebaseapp.com",
  projectId: "sap-aquel-manzano",
  storageBucket: "sap-aquel-manzano.appspot.com",
  messagingSenderId: "1046646356772",
  appId: "1:1046646356772:web:402e629ef5d7794d7b51b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const fetchFromFirestore = async() => {
  const querySnapshot = await getDocs(collection(db, "productos"));
  const dataFromFirestore = querySnapshot.docs.map(item => ({
    id : item.id,
    ...item.data()
  }))

  return dataFromFirestore;
}

export { app, db };