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
        <div className="px-20">
            <h1 className="my-10 text-5xl font-bold text-center">Our Reliable Brands</h1>
           <div  className="grid grid-cols-3 gap-3">
           {
                brand.map(data => 
                <div key={data.id}>
                    <img onClick={()=>handleClick(data.brand) } className="md:h-72 md:w-68" src={data.url} alt="" />    
                </div>
                )
            }         
           </div>   
        </div>
    );
};

export default BrandCard;