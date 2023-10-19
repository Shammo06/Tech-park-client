import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthProvider";
import swal from "sweetalert";


const ViewDetails = () => {
    const {AddCart} = useContext(AuthContext);
    const data = useLoaderData();
    const  {name, image, description, price, rating} = data 
    const handleClick = () =>{
        AddCart(data)
        swal({
            text: "Product added Successfully",
            timer: 2000
          });
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