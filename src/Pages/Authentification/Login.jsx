import React, { useState } from 'react';
import SimpleInput from '../../components/FormElements/SimpleInput';
import { useNavigate } from 'react-router-dom';
import './Authentification.css';
import SimpleButton from '../../components/Buttons/SimpleButton';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();



    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        console.log('Email:', email);
        console.log('Password:', password);
        navigate('/')
    };

    return (
        <div className='login-container container flex-center'>
            <form className='login-form flex-center' onSubmit={handleSubmit}>
                <SimpleInput type='email' label='Email:' value={email} setValue={handleEmailChange} />
                <SimpleInput type='password' label='Password:' value={password} setValue={handlePasswordChange} />
                <SimpleButton type="submit">Login</SimpleButton>
            </form>
        </div>
    );
};

export default Login;