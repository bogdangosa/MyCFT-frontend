import { useEffect } from 'react'
import './App.css'
import AppLayout from './Layouts/AppLayout'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './Pages/Home';
import SignUp from './Pages/Authentification/SignUp';
import Login from './Pages/Authentification/Login';
import Map from './Pages/Map';



const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<AppLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Map' element={<Map/>}/>
      </Route>
  )
)


function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
