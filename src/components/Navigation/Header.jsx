
import React, { useState } from 'react';
import './Header.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../Firebase';
import { useMyUserUpdate, useUserContext } from '../../contexts/UserContext';

const Header = () => {
  const navigate = useNavigate();
  const [HamburgerState, setHamburgerState] = useState(true);
  const updateUser = useMyUserUpdate();
  const user = useUserContext();

  const logOut = ()=>{
    setHamburgerState(true)
    signOut(auth).then(()=>{
      updateUser("no user")
    })
  }

  return (
    <header className='header container flex-space-between'>
      <img src='./logo.svg' alt="Logo" onClick={()=>navigate('/')}/>
        
        
       
      {user=="no user"? 
      <div></div>
        :
        <>
        <div className={HamburgerState ? "hamburger" : "hamburger close-hamburger"} onClick={()=>setHamburgerState(!HamburgerState)}>
                  <div className="line line1"></div>
                  <div className="line line2"></div>
                  <div className="line line3"></div>
        </div>
      <nav className={(HamburgerState==false?"visible-nav":"") +" flex-start"}>
        <NavLink className={({ isActive }) => isActive ? "header-nav-link header-nav-link-active":"header-nav-link"} to="/" onClick={()=>{setHamburgerState(true)}}><span>01. </span>Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? "header-nav-link header-nav-link-active":"header-nav-link"} to="/Map" onClick={()=>{setHamburgerState(true)}}><span>02. </span>Plan a Trip</NavLink>
        <NavLink className={({ isActive }) => isActive ? "header-nav-link header-nav-link-active":"header-nav-link"} to="/News" onClick={()=>{setHamburgerState(true)}}><span>03. </span>News</NavLink>
        <NavLink className={({ isActive }) => isActive ? "header-nav-link header-nav-link-active":"header-nav-link"} to="/Rewards" onClick={()=>{setHamburgerState(true)}}><span>04. </span>Rewards</NavLink>
        <NavLink className={({ isActive }) => isActive ? "header-nav-link header-nav-link-active":"header-nav-link"} to="/Settings" onClick={()=>{setHamburgerState(true)}}><span>05. </span>Settings</NavLink>
        <p className="header-nav-link" onClick={()=>logOut()}><span>06. </span>Log Out</p>
      </nav>
      </>}
      {HamburgerState==false && <div className='bg-overlay'style={{zIndex:1}} onClick={()=>setHamburgerState(true)}/>}
    </header>
  );
};

export default Header;
