import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link } from "react-router-dom";
import auth from "../firebase/firebase.config";
import { useContext } from "react";
import { AuthContext } from "./AuthContext/AuthProvider";



const LogIn = () => {
    const provider = new GoogleAuthProvider();
    const {logIn} = useContext(AuthContext);
    const handleSubmit = e =>{
        e.preventDefault();
        const password = e.target.password.value;
        const email = e.target.email.value;
        console.log(password,email)
        logIn(email,password)
        .then(result=>console.log(result))
        .catch((error)=>console.log(error.message))
    }

    const handleClick = () => {
        signInWithPopup(auth,provider)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error=>console.log(error.message))
    }
    return (
        <div className="py-10 bg-purple-200 ">
        <form onSubmit={handleSubmit} className=" w-80 md:w-96 bg-stone-200 mx-auto card-body border-2 bg- border-green-500">
            <div className="form-control">
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Password</span>
            </label>
            <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
            <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
            </div>
            <div className="form-control mt-6 ">
            <button className="btn btn-warning bg-indigo-600 rounded-full  text-purple-50">Log In</button>
            </div>
            <div onClick={handleClick} className="form-control mt-6 bg-indigo-600 rounded-full text-purple-50 h-12">
                <p className="text-center font-semibold pt-3">Sign In with Google</p>
            </div>
            <div className="mb-6 px-9">
            <p>Donot Register? <Link className="text-blue-500 font-bold" to='/registration'>Go Register</Link></p> 
            </div>             
        </form>
        </div>
    );
};

export default LogIn;