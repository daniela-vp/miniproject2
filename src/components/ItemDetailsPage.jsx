import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";


function ItemDetailsPage(props) {

    const { itemId } = useParams();
    const location = useLocation();

    const item = location.state?.updatedItem || props.items.find((item) => item.id === parseInt(itemId));

    if (!item) {
        i
        return <p>Item not found.</p>;
    }

    return (
        <div>

            <img src={item.thumbnail} alt="Item Image" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>Price: {item.price}€</p>
            <p>Discount: {item.discountPercentage}%</p>
            <p>Stock: {item.stock}</p>
            <p>Brand: {item.brand}</p>
            <p>Category: {item.category}</p>
            <p>Rating: {item.rating}</p>
            <Link to={`/`}>Back</Link>
            <Link to={`/updateitem/${item.id}`}>Update Item</Link>



        </div>
    )
}


export default ItemDetailsPage;

