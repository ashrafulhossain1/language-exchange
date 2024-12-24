import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // email password SignUp
    const emailPasswordSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // email Password Signin
    const emailPasswordSignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // google SignIn
    const googleSignIn = () => {
        setUser(true)
        return signInWithPopup(auth, googleProvider)
    }

    // const update 
    const updateNameAndPhoto = (name, photo) => {
        return updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
            .then(() => {
                setUser((previous) => ({ ...previous, displayName: name, photoURL: photo }))
            })
    }

    const signOutUser = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setLoading(false)
                setUser(currentUser)
                console.log('State Capture', currentUser)
            }
            else {
                setUser(null)
                setLoading(false)
            }
        })
        
        return () => {
            unsubscribe()
        }
    }, [])


    const authInfo = {
        user,
        loading,
        emailPasswordSignUp,
        emailPasswordSignIn,
        googleSignIn,
        signOutUser,
        updateNameAndPhoto
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;