import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthProvider";


const ViewDetails = () => {
    const {addCart,user} = useContext(AuthContext)
    const email = user.email
    
    const data = useLoaderData();
    const  {name, image, description, price, rating} = data 
    const handleClick = () =>{
        const value ={email,data}
        addCart(value)        
    }
    return (
        <div>
            <div className="flex glass px-20 py-10">
            <img className="w-96" src={image} />
            <div className="card-body">
                <h2 className="card-title font-bold">{name}</h2>
                <p>{description}</p>
                <p className="font-bold">Rating : {rating}/5</p>
                <p className="font-bold">Price: {price} TK</p>
                <div className="card-actions justify-end">
                <button onClick={handleClick} className="btn btn-primary">Add to cart</button>
                </div>
            </div>
            </div>            
        </div>
    );
};

export default ViewDetails;