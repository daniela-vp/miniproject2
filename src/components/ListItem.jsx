function ListItem({ item, onDelete }) {
    const rateItem = (rating) => {
        return rating >= 4.50 ? "Best product on the market!" : "";
      };
    
      return (
        <div key={item.id} className="card">
          <img src={item.thumbnail.url} alt="Tech Image" />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>Price: {item.price}€</p>
          <p>Discount: {item.discountPercentage}%</p>
          <p>Stock: {item.stock}</p>
          <p>Brand: {item.brand}</p>
          <p>Category: {item.category}</p>
          <p>Rating: {item.rating}</p>
          <p>{rateItem(item.rating)}</p>
          <button onClick={() => onDelete(item.id)}>Delete</button>
        </div>
      );
    }
    
    export default ListItem;