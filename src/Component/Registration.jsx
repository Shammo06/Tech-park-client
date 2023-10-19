import { Link } from "react-router-dom";


const Registration = () => {
    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,photo,password,email);

    }
    return (
        <div>
        <form onSubmit={handleSubmit} className="card-body w-80 md:w-96">
            <div className="form-control">
            <label className="label">
                <span className="label-text">Your Name</span>
            </label>
            <input type="text" name='name' placeholder="write your Email" className="input input-bordered" required />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Your Picture</span>
            </label>
            <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
            </div>
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
           
            </div>
            <div className="form-control mt-6">
            <button className="btn btn-warning rounded-full bg-[#ff6d4a] border-[#ff6d4a] text-[#fafcff]">Register</button>
            </div>           
            <div className="mb-6 px-9">
            <p>Already Register? <Link className="text-blue-500 font-bold" to='/logIn'>Go LogIn</Link></p> 
            </div>             
        </form>
        </div>
    );
};

export default Registration;