import swal from 'sweetalert'

const AddProduct = () => {
    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value 
        const brand = e.target.brand.value
        const image = e.target.image.value 
        const price = e.target.price.value 
        const description = e.target.description.value 
        const rating = e.target.rating.value
        const type = e.target.type.value  
        const product = {name,brand,image,type,price,description,rating} 
        
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    swal({
                        title: "Good job!",
                        text: "You Successfully Add Product",
                        icon: "success",
                        button: "Add More",
                      });                   
                }
            })      

    }
    return (
        <div>
            <div className="hero bg-base-200">       
                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                    <h1 className="text-center font-bold text-2xl">Fill Up The Given Information To Add</h1>
                <form onSubmit={handleSubmit} className="card-body grid grid-cols-2">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type="text" name="name" placeholder="" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Brand Name</span>
                    </label>
                    <input type="text" name="brand"  className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Image</span>
                    </label>
                    <input type="text" name="image" placeholder="" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Type</span>
                    </label>
                    <input type="text" name="type"  className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" name="price" placeholder="" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating out of 5</span>
                    </label>
                    <input type="text" name="rating"  placeholder="" className="input input-bordered" required />
                    </div>

                    <div className="form-control col-span-2">
                    <label className="label">
                        <span className="label-text">Short Description</span>
                    </label>
                    <input type="text" name="description"  className="input input-bordered h-24" required />
                    </div>
                    
                    <div className="form-control mt-6 col-span-2 mx-auto">
                    <button className="btn btn-primary md:w-96">Add Product</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
       
    );
};

export default AddProduct;