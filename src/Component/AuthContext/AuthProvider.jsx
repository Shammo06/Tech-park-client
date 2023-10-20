import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import swal from 'sweetalert'

export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const createUser =(email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
const addCart = (data) =>{
        fetch('http://localhost:5000/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    swal({
                        title: "Good job!",
                        text: "You Successfully Add Product",
                        icon: "success",
                        button: "Add More",
                      });                   
                }
            })      
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
        addCart       
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