import React, { useState } from 'react';
import SimpleInput from '../../components/FormElements/SimpleInput';
import { useNavigate } from 'react-router-dom';
import SimpleButton from '../../components/Buttons/SimpleButton';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className='login-container container flex-center'>
            <form className='login-form flex-center' onSubmit={handleSubmit}>
                <SimpleInput type='text' label='Name:' value={name} setValue={handleNameChange} />
                <SimpleInput type='email' label='Email:' value={email} setValue={handleEmailChange} />
                <SimpleInput type='password' label='Password:' value={password} setValue={handlePasswordChange} />
                <SimpleButton type="submit" className="login-btn">Sign Up</SimpleButton>
                <p className='c-text1'>You already have an accout? <span className='c-primary' onClick={()=>navigate("/Login")}>Log in</span></p>
            </form>
        </div>
    );
};

export default SignUp;