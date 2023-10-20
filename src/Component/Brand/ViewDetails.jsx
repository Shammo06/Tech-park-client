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
            <div className="card w-96 mx-auto glass">
            <figure><img src={image} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>Rating : {rating}/5</p>
                <p>{price}</p>
                <div className="card-actions justify-end">
                <button onClick={handleClick} className="btn btn-primary">Add to cart</button>
                </div>
            </div>
            </div>            
        </div>
    );
};

export default ViewDetails;