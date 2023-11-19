
import { onAuthStateChanged, signOut } from "firebase/auth";
import react, { useState, useEffect } from "react";
import { auth } from "../Firebase";
import axios from "axios";

const useUser = () => {
    const [User, setUser] = useState(undefined);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user)=>{
            console.log(user);
            if(user){
                setUser(user);
                getUserData(user);
            }
            else
                setUser("no user");
        })
        return ()=>unsubscribe();
    },[]); 


    const getUserData = async (user) => {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_ADRESS}/users/${user.uid}`);
       setUser({...user,...response.data});
       console.log({...user,...response.data});

    }

    const updateUser = (data)=>{
        setUser(data);
    }

    return [User, updateUser];
};

export default useUser;