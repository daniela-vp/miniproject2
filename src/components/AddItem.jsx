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
    
    console.log("Submitted", newItem);
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
        <label> Title: </label>
        <input type="text" name="title" value={title} onChange={handleTitleInput} />

        <label> Brand: </label>
        <input type="text" name="brand" value={brand} onChange={handleBrandInput} />

        <label> Price:€</label>
        <input type="number" name="price" value={price} onChange={handlePriceInput} />

        <label> Category: </label>
        <input type="text" name="category" value={category} onChange={handleCategoryInput} />
        <button type="submit">Add an Item</button>
      </form>
    </div>
  );
}

export default AddItem;

