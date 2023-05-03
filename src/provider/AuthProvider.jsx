/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';
export const AuthContext = createContext(null)
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState({});

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const updateNameAndPhoto = (name,photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }

    const authInfo = {
        user,
        createUser,
        updateNameAndPhoto
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;