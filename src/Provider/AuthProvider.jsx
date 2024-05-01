import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from './../Firebase/firebase.config';

export const AuthContex = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, SetLoading] = useState(true);

    //Create User
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    // Sign In
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unSuscribe = onAuthStateChanged(auth, currntUser => {
            setUser(currntUser);
            console.log(currntUser)
            SetLoading(false)
        });
        return () => {
            return unSuscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn

    }
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;