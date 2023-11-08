import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app)
const AuthProvider = ({children}) => {

    const [user, setUser] =useState(null)
    const[loading, setLoading] =useState(true);

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email, password)
    }

    const singIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }

    useEffect(()=>{
       const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email: userEmail};
            setUser(currentUser)
            console.log('current user', currentUser)
            setLoading(false);
            //if user exists 
            if(currentUser){
                
                axios.post('https://group-study-assignment-11-server.vercel.app/jwt',loggedUser, {withCredentials:true})
                .then(res =>{
                    console.log('token response',res.data);
                })
            }
            else{
                axios.post('https://group-study-assignment-11-server.vercel.app/logout',loggedUser,{
                    withCredentials:true
                })
                .then(res => {
                    console.log(res.data);
                })
            }

        });
        return() =>{
            unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        createUser,
        singIn,
        logOut,
        loading,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;