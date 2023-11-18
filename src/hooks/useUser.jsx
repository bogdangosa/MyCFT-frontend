
import { onAuthStateChanged, signOut } from "firebase/auth";
import react, { useState, useEffect } from "react";
import { auth } from "../Firebase";
import axios from "axios";

const useUser = () => {
    const [User, setUser] = useState(undefined);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user)=>{
            console.log(user);
            if(user)
                setUser(user);
            else
                setUser("no user");
        })
        return ()=>unsubscribe();
    },[]); 

    const updateUser = (data)=>{
        setUser(data);
    }

    return [User, updateUser];
};

export default useUser;