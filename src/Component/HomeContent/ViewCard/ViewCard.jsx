import { useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";


const ViewCard = () => {
    const {product} = useContext(AuthContext)
    return (
        <div>
            <ul>
                {
                    product.map(data => 
                        <li key={data._id}>
                            {data.name}
                        </li>
                        )
                }
            </ul>
        </div>
    );
};

export default ViewCard;