import React, { useState } from 'react'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import './SignUpScreen.css'

function SignUpScreen() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');



    const register =(e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth,
          email,
          password
        ).then((authUser)=>{
            console.log(authUser);
            setEmail('');
            setPassword('');
        }).catch((error)=>{
          alert(error.message);
        });
    }
    const signIn=(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword( auth,email,password)
        .then((authUser)=>{
          console.log(authUser)
          setEmail('');
          setPassword('');
      }).catch((error)=>{
        alert(error.message);
      });
    }
  return (
    <div className='signUpScreen'>
       <form>
        <h1>Sign In</h1>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Email address' />
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Password' />
            <button onClick={signIn} type='submit'>Sign In</button>
            <h4> <span className='signUpScreen__gray'>New to Netflix? </span>
                <span onClick={register} className='signUpScreen__link'>Sign Up now.</span> </h4>
            
        </form>
    </div>
  )
}

export default SignUpScreen
