import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const NewProduct = () => {
    const [product,setProduct] = useState([])
    const navigate = useNavigate();
    
    useEffect(()=>{
        fetch('http://localhost:5000/latest')
        .then(res => res.json())
        .then(data=> setProduct(data))
    })

    const handleClick = (data) =>{
       
        navigate(`/${data}`)

    }
    return (
        <div className="md:px-36 lg:px-20 px-3 py-5">
            <h1 className="my-10 text-5xl font-bold text-center"> What's New </h1>
           <div   className="grid lg:grid-cols-3 gap-3">
           {
            product.map(data =>
                <div key={data._id} onClick={() => handleClick(data.brand)} className="card w-96 bg-base-100 shadow-xl">
                <figure><img className="h-80" src={data.image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {data.name}
                    <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline">{data.brand}</div> 
                    <div className="badge badge-outline">{data.price}</div>
                    </div>
                </div>
                </div>
            )
           }
           </div>   
        </div>
    );
};

export default NewProduct;