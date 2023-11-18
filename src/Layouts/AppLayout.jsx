import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Navigation/Header';
import { UserProvider } from '../contexts/UserContext';


const AppLayout = () => {

  return (
      <div className='app-layout'>
        <Header />
        <Outlet />
      </div>
  );
};

export default AppLayout;
