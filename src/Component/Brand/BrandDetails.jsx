
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const BrandDetails = () => {
    const [product,setProduct] = useState([])
    const navigate = useNavigate();
    const params = useParams();
    const brandName = params.brand
    
    useEffect(()=>{
        fetch(`http://localhost:5000/products/${brandName}`)
        .then(res => res.json())
        .then(data=> setProduct(data))
    })
    
    const handleClickDetails = (id) =>{
        navigate(`/details/${id}`)
    }
    const handleClickUpdate = (id) =>{
        navigate(`/update/${id}`)
    }

    return (
        <div className="grid md:grid-cols-2">
            {
                product.map(data=> 
                <div className="bg-base-100 px-14" key={data._id}>
                    <div className="text-4xl font-bold py-5">
                        <h1>{data.name}</h1>
                    </div>
                    <div className="card md:card-side bg-base-100 ">
                    <figure>
                        <img className="w-80 h-56" src={data.image} alt=""/>                      
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{data.brand}</h2>
                        <h2 className="">Category: {data.type}</h2>
                        <h2 className="">Price: {data.price} TK</h2>
                        
                    </div>
                    </div>
                    <div className="card justify-center gap-5 pt-5">
                        <button onClick={() => handleClickDetails(data._id)} className="w-1/2 btn btn-primary">View Details</button>
                        <button onClick={() => handleClickUpdate(data._id) } className="w-1/2 btn btn-primary">Update Details</button>
                    </div>

                </div>
                )
            }
        </div>
    );
};

export default BrandDetails;