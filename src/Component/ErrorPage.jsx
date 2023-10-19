import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center pt-32 ">
            <h1 className="text-6xl text-cyan-600 pb-10">Opps <br/> Nothing to Explore</h1>
            <Link  to='/'><button className="btn btn-secondary">Go Home</button></Link>                    
        </div>
    );
};

export default ErrorPage;