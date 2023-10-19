import photo from '../../assets/oliver-pecker-HONJP8DyiSM-unsplash.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: `url(${photo})`}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="">
            <h1 className="mb-10 text-5xl font-bold">Make Your Daily Life Comfortable <br/> With Our Elegant Gadget</h1>
            <button className="btn btn-primary">Explore Now</button>
            </div>
        </div>
        </div>  
    )
};

export default Banner;