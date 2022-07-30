// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,createUserWithEmailAndPassword,onAuthStateChanged, signOut,signInWithEmailAndPassword} from 'firebase/auth'
import { useState ,useEffect} from "react";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNu8Qz0jTEa3UBpkh7fAwqzBUx3oY1Uc4",
  authDomain: "ecom-4129a.firebaseapp.com",
  projectId: "ecom-4129a",
  storageBucket: "ecom-4129a.appspot.com",
  messagingSenderId: "317888779944",
  appId: "1:317888779944:web:a232e3674c2af19608949d",
  measurementId: "G-FV4GMPL3JN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();

export function signup(email,password){
return createUserWithEmailAndPassword(auth,email,password);
}
export function login(email,password){
    return signInWithEmailAndPassword(auth,email,password);
    }

export function logout(){
    return signOut(auth)
}

export function useAuth(){
    const[currentUser,setCurrentUser]=useState();

    useEffect(()=>{
        const unsub=onAuthStateChanged(auth,user=>setCurrentUser(user))
        return unsub
    },[])
    

    return currentUser;
}