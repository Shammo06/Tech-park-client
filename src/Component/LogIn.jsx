import { Link } from "react-router-dom";


const LogIn = () => {
    const handleSubmit = e =>{
        e.preventDefault();
        const password = e.target.password.value;
        const email = e.target.email.value;
        console.log(password,email)
    }

    const handleClick = () => {

    }
    return (
        <div>
        <form onSubmit={handleSubmit} className="card-body w-80 md:w-96">
            <div className="form-control">
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Password</span>
            </label>
            <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
            <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
            </div>
            <div className="form-control mt-6">
            <button className="btn btn-warning rounded-full bg-[#ff6d4a] border-[#ff6d4a] text-[#fafcff]">Log In</button>
            </div>
            <div className="form-control mt-6  rounded-full bg-[#ff6d4a] border-[#ff6d4a]">
                <p>Sign In with Google</p>
            </div>
            <div className="mb-6 px-9">
            <p>Donot Register? <Link className="text-blue-500 font-bold" to='/registration'>Go Register</Link></p> 
            </div>             
        </form>
        </div>
    );
};

export default LogIn;