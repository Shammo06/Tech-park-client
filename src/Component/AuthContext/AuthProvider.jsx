import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [product, setProduct]= useState([])
    const [loading, setLoading] = useState(true);

    const AddCart = (data) => {        
        useEffect(() => {
            setProduct([...product, data]);            
          }, [])      
        return       
    }

    const createUser =(email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    } 
    
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }   
    
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])

        const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const shareData ={
        createUser,
        logIn,
        user,
        logOut,
        loading,
        AddCart,
        product    

    }
    return (
        <AuthContext.Provider value={shareData} >
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes ={
    children : PropTypes.node
}

export default AuthProvider;