import { NavLink } from "react-router-dom";
import { AuthContext } from "./AuthContext/AuthProvider";
import { useContext } from "react";



const Navbar = () => {
    const {user,logOut} = useContext(AuthContext)
    console.log(user)

    const handleClick = () =>{
      logOut();
    }

    return (
        <div className="bg-indigo-500">
          <div className="navbar ">
            <div className="flex-1">
            <a className="btn text-purple-50 btn-ghost normal-case text-xl">Tech Park</a>
            </div>
            <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator ">
                  <NavLink to='/viewCart'><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg></NavLink>
                </div>
              </label>              
            </div> 
            {
              user ?
              <div className="flex gap-2">
                <button className="text-purple-50">{user.displayName}</button>
                <div className="w-12 rounded-full"><img className="rounded-full" src={user.photoURL}/></div>
                <button onClick={handleClick} className="btn">LogOut</button>
              </div>
              :
              <NavLink to="/login"><button className="btn ">LogIn</button></NavLink>
            }           
            </div>
        </div>
        <div className="flex justify-center md:gap-8 gap-4  font-semibold text-purple-50 bg-indigo-600 pb-10">
          <NavLink to="/"><h1>Home</h1></NavLink>
          <NavLink to="/addProduct"><h1>Add Product</h1></NavLink>
          <NavLink><h1>Product</h1></NavLink>
          <NavLink to="/latest"><h1>New Arrival</h1></NavLink>
        </div>


        </div>
    );
};

export default Navbar;