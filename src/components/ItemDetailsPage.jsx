import { useParams } from "react-router-dom";

import data from "../assets/data/data.json"

function ItemDetailsPage() {

   const {itemId} = useParams();


//    const item = data.find();
const item = data.find((item) => item.id === parseInt(itemId));
if (!item) {
    return <p>Item not found.</p>;
  }

    return (
        <div>

            <img src={item.thumbnail.url} alt="Item Image" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>Price: {item.price}€</p>
            <p>Discount: {item.discountPercentage}%</p>
            <p>Stock: {item.stock}</p>
            <p>Brand: {item.brand}</p>
            <p>Category: {item.category}</p>
            <p>Rating: {item.rating}</p>
            


        </div>
    )
}


export default ItemDetailsPage;

