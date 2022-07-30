import React from 'react'
import {useRef} from 'react';
import { signup,useAuth,logout } from './firebase';
import {useState} from 'react';
import {Link} from 'react-router-dom'


const Signup = () => {
    const [loading,setLoading]=useState(false)
    const emailRef=useRef();
    const passwordRef=useRef()
    const currentUser=useAuth();

    async function handleSignup(){
        setLoading(true);
        try{
        await signup(emailRef.current.value,passwordRef.current.value)
        }catch{
            alert("error");
        }
        setLoading(false);
    }

    async function handleLogout(){
        setLoading(true);
        try{
        await logout();
        }catch{
            alert("error");
        }
        setLoading(false);
    }
    return (
        <div className="signupbox">
            <div className="inputsignup">
            <input ref={emailRef} className="inputfield"type="text" placeholder="Email" />
            </div>
            <div className="inputsignup">
            <input ref={passwordRef} className="inputfield"type="password" placeholder="password"/>
            </div>
       
            <div className="inputsignup">
                <div className="button1" className={currentUser?"hide":"show"}>
            <button 
           onClick={handleSignup}  id="signupbutt">Sign Up</button>
           </div>
           <div className="button2">
           
           
            <Link to="/signin" className="linkage"  >Go to signin page</Link>
         
            </div>
            <div className="button3" className={currentUser?"show":"hide"}>
            <button
           onClick={handleLogout} id="signupbutt" >Log Out</button>
           </div>
     
     </div>
         
            
        </div>
    )
}

export default Signup
