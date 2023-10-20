import { useContext, useState } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";
import { useLoaderData } from "react-router-dom";


const ViewCard = () => {
    let total = 0
    const {user}= useContext(AuthContext);
    const data = useLoaderData();
    const email = user.email
       
    const targetData = data.filter(data=> data.email=== email)
    if (targetData) {
        targetData.forEach(data => {
            const price= parseInt(data.data.price);
            total += price
        });
      }
    console.log(targetData);

    

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
                    </tr>
                    </thead>
                    <tbody>
                    
                    {
                        targetData.map(data =>
                            <tr key={data._id}>
                            <th>{data.data.name}</th>
                            <td>{data.data.type}</td>
                            <td>{data.data.brand}</td>
                            <td>{data.data.price}</td>

                    </tr>
                    )
                    }                    
                    </tbody>
                </table>
                
                </div>
                <h1 className="text-2xl ">Total Amount: {total}</h1>
        </div>
    );
};

export default ViewCard;