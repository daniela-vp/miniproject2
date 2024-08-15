import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UpdateItem({ data, updateData }) {
    const { itemId } = useParams();
    const navigate = useNavigate();

    if (!data) {
        return <p>Loading...</p>;
    }


    const item = data.find((item) => item.id === parseInt(itemId));

    if (!item) {
        return <p>Item not found.</p>;
    }

    const [title, setTitle] = useState(item.title);
    const [price, setPrice] = useState(item.price);
    const [discount, setDiscount] = useState(item.discountPercentage);
    const [stock, setStock] = useState(item.stock);
    const [brand, setBrand] = useState(item.brand);
    const [category, setCategory] = useState(item.category);
    const [rating, setRating] = useState(item.rating);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedItem = {
            ...item,
            title,
            price: parseFloat(price),
            discountPercentage: parseFloat(discount),
            stock: parseInt(stock),
            brand,
            category,
            rating: parseFloat(rating),
        };

        updateData(updatedItem);


        navigate(`/items/${itemId}`, { state: { updatedItem }, replace: true });
    };

    return (
        <div className="UpdateItem">
            <h4>Update an Item</h4>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        required
                        placeholder="Enter title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>

                <label>
                    Price:
                    <input
                        type="number"
                        name="price"
                        required
                        min={0}
                        max={10000}
                        placeholder="Enter price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </label>

                <label>
                    Discount:
                    <input
                        type="number"
                        name="Discount"
                        required
                        min={1}
                        max={99}
                        placeholder="Enter the discount"
                        value={discount}
                        onChange={(e) => setDiscount(e.target.value)}
                    />
                </label>

                <label>
                    Stock:
                    <input
                        type="number"
                        name="stock"
                        required
                        min={0}
                        placeholder="Enter stock"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                    />
                </label>

                <label>
                    Brand:
                    <input
                        type="text"
                        name="brand"
                        required
                        placeholder="Enter brand"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                    />
                </label>


                <label>
                    Category:
                    <input
                        type="text"
                        name="category"
                        required
                        placeholder="Enter category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />

                    <label>
                        Rating:
                        <input
                            type="number"
                            name="rating"
                            required
                            min={0}
                            max={5}
                            placeholder="Enter rating"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                        />
                    </label>

                </label>
                <button type="submit">Update an Item</button>
            </form>
        </div>
    );
}

export default UpdateItem;

