

const Newsteller = () => {
    return (
        <div className="lg:flex bg-red-400 justify-between h-80 px-14 lg:px-24 lg:pt-32 pt-10">
            <div className="">
                <h1 className="text-4xl font-semibold">Subscribe To Our Newsletter</h1>
                <p>Get all the latest information on Events, Sales and Offers.</p>
            </div>
             <div className="flex">
                <input  type="text" placeholder="Email Address" className="h-14 input-primary w-96 rounded-l-lg pl-3" />
                <button  className="text-white h-14 bg-orange-500 w-32 rounded-r-lg">Subscribe</button>
            </div>         
        </div>
    );
};

export default Newsteller;