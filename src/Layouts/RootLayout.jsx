import { useEffect } from 'react'
import AppLayout from './AppLayout'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, useNavigate } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Authentification/Login';
import SignUp from '../Pages/Authentification/SignUp';
import Map from '../Pages/Map';
import { useUserContext } from '../contexts/UserContext';
import Redirect from '../Pages/Redirect';



const user_router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<AppLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/Map' element={<Map/>}/>
      </Route>
  )
)

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<AppLayout/>}>
          <Route index element={<Redirect to="/Login"/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
          <Route path='/Map' element={<Map/>}/>
        </Route>
    )
  )


function RootLayout() {
    const user = useUserContext();

    useEffect(() => {
        /*if( user == undefined){
            router.navigate('/Login');
        }*/

    }, [user])

    if(user==undefined)
        return <p>Loading...</p>
    

  return (
    <RouterProvider router={user=="no user"?router:user_router}/>
  )
}

export default RootLayout
