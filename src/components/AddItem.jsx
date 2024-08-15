import { useState } from "react";

function AddItem({ addItem }) {

  const [title, setTitle] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const handleTitleInput = (e) => setTitle(e.target.value);

  const handleBrandInput = (e) => setBrand(e.target.value);

  const handlePriceInput = (e) => setPrice(e.target.value);

  const handleCategoryInput = (e) => setCategory(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { title, brand, price: parseFloat(price), category };

    addItem(newItem);

    setTitle("");
    setBrand("");
    setPrice("");
    setCategory("");
  }
  return (
    <div className="AddItem">
      <h4>Add an Item</h4>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            required
            placeholder="Enter title"
            value={title}
            onChange={handleTitleInput}
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
            onChange={handleBrandInput}
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
            onChange={handlePriceInput}
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
            onChange={handleCategoryInput}
          />
        </label>
        <button type="submit">Add an Item</button>
      </form>
    </div>
  );
}

export default AddItem;

