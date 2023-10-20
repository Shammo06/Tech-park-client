import image1 from '../../assets/WhatsApp Image 2023-10-20 at 14.42.33_9d729fe9.jpg'
import image2 from '../../assets/STUDENTS-OFFER.jpg'
import image3 from '../../assets/finance-offer1-web.jpg'
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const BrandDetails = () => {
    
    const [product,setProduct] = useState([])
    const navigate = useNavigate();
    const params = useParams();
    const brandName = params.brand
    
    useEffect(()=>{
        fetch(`https://tech-park-server-abamnbza9-shammo06.vercel.app/products/${brandName}`)
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
        <div className="">
            <div className="">
            <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={image1} className="w-10/12 " />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                <img src={image2} className="w-10/12" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <img src={image3} className="w-10/12" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div> 
           
            </div>
            </div>
            <div className="grid lg:grid-cols-2 md:px-20 gap-5 py-10 ">
            {
                product.map(data=> 
                <div className="px-14 " key={data._id}>
                    <div className="text-4xl font-bold py-5">
                        <h1 className="text-center">{data.name}</h1>
                    </div>
                    <div className="card md:card-side">
                    <figure>
                        <img className="w-80 h-64" src={data.image} alt=""/>                      
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{data.brand}</h2>
                        <h2 className="">Category: {data.type}</h2>
                        <h2 className="">Price: {data.price} TK</h2>
                        <button onClick={() => handleClickDetails(data._id)} className=" btn btn-primary">View Details</button>
                        <button onClick={() => handleClickUpdate(data._id) } className=" btn btn-primary">Update Details</button>
                        
                    </div>
                    </div>
                    

                </div>
                )
            }
            </div>
        </div>
    );
};

export default BrandDetails;