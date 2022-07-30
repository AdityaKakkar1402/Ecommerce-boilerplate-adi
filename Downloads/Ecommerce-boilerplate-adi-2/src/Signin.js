import React from 'react'
import {useRef} from 'react';
import { signup,login,useAuth,logout } from './firebase';
import {useState} from 'react';
import {Link} from 'react-router-dom'

const Signin = () => {
    const [loading,setLoading]=useState(false)
    const emailRef=useRef();
    const passwordRef=useRef()
    const currentUser=useAuth();

    async function handleSignin(){
        setLoading(true);
        try{
        await login(emailRef.current.value,passwordRef.current.value)
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
        <div className="signupbox" id="signupbox">
            <div className="inputsignup">
            <input ref={emailRef} className="inputfield"type="text" placeholder="Email" />
            </div>
            <div className="inputsignup">
            <input ref={passwordRef} className="inputfield"type="password" placeholder="password"/>
            </div>
            <div className="inputsignup">
                <div className="button1"className={currentUser?"hide":"show"}>
            <button  onClick={handleSignin}  id="signupbutt">Sign In</button>
            <br/>
            </div>
           <div className="button2">
            <Link to="/signup"  ><div className="gotosignup">Go to signup page</div></Link>
            </div>
         <div className="button3" className={currentUser?"show":"hide"}>
         
            <button  onClick={handleLogout} id="signupbutt">Log Out</button>
     
         
            </div>
            </div>
            
        </div>
    )
}

export default Signin
