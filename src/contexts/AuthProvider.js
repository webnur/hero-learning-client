import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config';

const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    // Create User with Email & Password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign in With Email and password
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Sign in with Google 
    const googleSigIn = () => {
        return signInWithPopup(auth, provider)
    }

    // Sign In With Github 
    const githubSignIn = () => {
        return signInWithPopup(auth, githubProvider)
    }

    // sign out system

    const logOut = () => {
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (createUser) => {
            console.log('user inside state Change', createUser)
            setUser(createUser)
        })

        return () => {
            unsubscribe()
        }
    }, [])


    const userInfo = {
        user,
        createUser,
        signIn,
        googleSigIn,
        githubSignIn,
        logOut
    }


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;