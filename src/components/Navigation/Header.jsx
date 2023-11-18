
import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className='header flex-center'>
      <img src='./logo.svg' alt="Logo" onClick={()=>navigate('/')}/>
    </header>
  );
};

export default Header;
