import { useEffect } from 'react'
import './App.css'
import AppLayout from './Layouts/AppLayout'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import RootLayout from './Layouts/RootLayout';


function App() {
  return (
    <UserProvider>
      <RootLayout/>
    </UserProvider>
  )
}

export default App
