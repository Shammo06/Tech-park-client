import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const Update = () => {
    const {_id, name,brand,image,type,price,rating} = useLoaderData();
    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value 
        const brand = e.target.brand.value
        const image = e.target.image.value 
        const price = e.target.price.value 
        const rating = e.target.rating.value
        const type = e.target.type.value  
        const product = {name,brand,image,type,price,rating} 
        
        fetch(`http://localhost:5000/product/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0){
                    swal({
                        title: "Good job!",
                        text: "You Successfully Update Product",
                        icon: "success",
                        button: "Update Again",
                      });                   
                }
            })      

    }
    return (
        <div>
        <div className="hero min-h-screen bg-base-200">       
            <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit}  className="card-body grid grid-cols-2">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Product Name</span>
                </label>
                <input type="text" name="name" defaultValue={name} placeholder="" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Brand Name</span>
                </label>
                <input type="text" name="brand" defaultValue={brand} className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Product Image</span>
                </label>
                <input type="text" name="image" defaultValue={image} placeholder="" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Product Type</span>
                </label>
                <input type="text" name="type" defaultValue={type} className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Price</span>
                </label>
                <input type="text" name="price" defaultValue={price} placeholder="" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Rating out of 5</span>
                </label>
                <input type="text" name="rating" defaultValue={rating} placeholder="" className="input input-bordered" required />
                </div>
                
                <div className="form-control mt-6">
                <button className="btn btn-primary">Update Product</button>
                </div>
            </form>
            </div>
        </div>
    </div>
    );
};

export default Update;