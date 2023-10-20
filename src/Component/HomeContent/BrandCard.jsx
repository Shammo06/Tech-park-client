import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const BrandCard = () => {
    const [brand, setBrand]= useState([]);
    const navigate = useNavigate();
    
    useEffect(()=>{
        fetch('brand.json')
        .then(res => res.json())
        .then(data=> setBrand(data))
    })

    const handleClick = (data) =>{
       
        navigate(`/${data}`)

    }
    
    return (
        <div className="lg:pl-40 md:pl-24 pl-10 pb-10">
            <h1 className="my-10 text-5xl font-bold text-center">Our Reliable Brands</h1>
           <div  className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
           {
                brand.map(data => 
                <div key={data.id}>
                    <img onClick={()=>handleClick(data.brand) } className="card md:h-64 md:w-64" src={data.url} alt="" />    
                </div>
                )
            }         
           </div>   
        </div>
    );
};

export default BrandCard;