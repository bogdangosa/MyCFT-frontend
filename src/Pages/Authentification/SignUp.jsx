import React, { useState } from 'react';
import SimpleInput from '../../components/FormElements/SimpleInput';
import { useNavigate } from 'react-router-dom';
import SimpleButton from '../../components/Buttons/SimpleButton';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase';
import axios from 'axios';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ErrorText,setErrorText] = useState('')
    const navigate = useNavigate();

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const signUpUser = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password).then(async(userCredentials)=>{
            console.log(userCredentials);
            
            loginToServer(userCredentials);
            navigate("/");
            // close();
          }).catch((error)=>{
            // console.log(error);
            switch(error.message){
              case "Firebase: Error (auth/wrong-password).":
                setErrorText("Wrong password!")
                break;
              case "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).":
                setErrorText("To many attemts, try again later!");
                break;
              case "Firebase: Error (auth/user-not-found).":
               setErrorText("User not found!");
               break;
              case "Firebase: Error (auth/email-already-in-use).":
               setErrorText("Email already in use!");
                break;
              default:
                setErrorText("Choose a new password at least 6 charancters long.");
                console.log(error.message);
                break;
            }
            });
        }

        const loginToServer = async (userCredentials) => {   
            const response = await axios.post(`${import.meta.env.VITE_SERVER_ADRESS}/users/${userCredentials.user.uid}`,{
                email: email,
                name: name,
                headers:{
                    "ngrok-skip-browser-warning": "69420",
                }
            }).catch((error)=>{
                console.log(error);
            })
        }

    return (
        <div className='login-container container flex-center'>
            <form className='login-form flex-center' onSubmit={signUpUser}>
                <SimpleInput type='text' label='Name:' value={name} setValue={handleNameChange} />
                <SimpleInput type='email' label='Email:' value={email} setValue={handleEmailChange} />
                <SimpleInput type='password' label='Password:' value={password} setValue={handlePasswordChange} />
                <SimpleButton type="submit" className="login-btn">Sign Up</SimpleButton>
                <p className='error-text'>{ErrorText}</p>
                <p className='c-text1'>You already have an accout? <span className='c-primary' onClick={()=>navigate("/Login")}>Log in</span></p>
            </form>
        </div>
    );
};

export default SignUp;