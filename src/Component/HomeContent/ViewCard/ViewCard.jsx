import { useContext, useState} from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";


const ViewCard = () => {
   
       
    const {user}= useContext(AuthContext);
    const data = useLoaderData();
    const email = user.email
       
    const targetData = data.filter(data=> data.email=== email)
    const [product, setProduct] = useState(targetData);
    
    

    const handleClick=(id) => {      

            fetch(`https://tech-park-server-abamnbza9-shammo06.vercel.app/cart/${id}`, {
            method: 'DELETE'
             })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    swal("Deleted!", "Your product has been removed.", "success");
                    
                    const remaining = product.filter(item => item._id !== id);
                    setProduct(remaining);
                    
                }
            })
        }
         

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Brand</th>
                        <th>Price</th>
                        <th>Activity</th>
                    </tr>
                    </thead>
                    <tbody>
                    
                    {
                        product.map(data =>
                            <tr key={data._id}>
                            <th>{data.data.name}</th>
                            <td>{data.data.type}</td>
                            <td>{data.data.brand}</td>
                            <td>{data.data.price}</td>
                            <td><button className='btn' onClick={()=>handleClick(data._id)}>Remove</button></td>

                    </tr>
                    )
                    }                    
                    </tbody>
                </table>
                
                </div>
               
        </div>
    );
};

export default ViewCard;