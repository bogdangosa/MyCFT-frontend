import React, { useState } from 'react';
import SimpleInput from '../../components/FormElements/SimpleInput';
import { useNavigate } from 'react-router-dom';
import './Authentification.css';
import SimpleButton from '../../components/Buttons/SimpleButton';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ErrorText, setErrorText] = useState('');
    const navigate = useNavigate();



    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };


    
  const LoginUser = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      setErrorText("")
        console.log("sign in");
        navigate("/");
    }).catch((error) => {
      switch (error.message) {
        case "Firebase: Error (auth/wrong-password).":
          setErrorText("Wrong password!")
          break;
        case "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).":
          setErrorText("Too many attemts, try again later!");
          break;
        case "Firebase: Error (auth/user-not-found).":
          setErrorText("User not found!");
          break;
        default:
          console.log(error.message);
          setErrorText(error.message);
          break;
      }
    })
  }




    return (
        <div className='login-container container flex-center'>
            <form className='login-form flex-center' onSubmit={LoginUser}>
                <SimpleInput type='email' label='Email:' value={email} setValue={handleEmailChange} />
                <SimpleInput type='password' label='Password:' value={password} setValue={handlePasswordChange} />
                <SimpleButton type="submit" className="login-btn">Login</SimpleButton>
                <p className='error-text'>{ErrorText}</p>
                <p className='c-text1'>You don't have an accout? <span className='c-primary' onClick={()=>navigate("/SignUp")}>SignUp</span></p>
            </form>
        </div>
    );
};

export default Login;