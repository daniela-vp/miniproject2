import { Link } from "react-router-dom";

function ItemSummary({ item, onDelete }) {

  const rateItem = (rating) => {
    return rating >= 4.50 ? "⭐⭐" : "";
  };
  
  return (
    <div key={item.id} className="card">
      <img src={item.thumbnail} alt="Item Image" />
      <h3>{item.title}</h3>
      <p>Price: {item.price}€</p>
      <p>Brand: {item.brand}</p>
      <p>Category: {item.category}</p>
      <p>{item.rating}</p>
      <p>{rateItem(item.rating)}</p>
      <button onClick={() => onDelete(item.id)}>Delete</button>

      <Link to={`/items/${item.id}`}>More details</Link>

    </div>
  );
}

export default ItemSummary;


