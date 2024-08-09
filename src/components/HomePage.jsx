import { useState } from "react";
import data from "../assets/data/data.json"
import List from "./List";
import AddItem from "./AddItem";

function HomePage() {
  const [items, setItems] = useState(data);

  const deleteItem = (id) => {
    const newList = items.filter((item) => item.id !== id);
    setItems(newList);
  };

  const addItem = (itemDetails) => {
    const itemIds = items.map((item) => item.id);
    const maxId = itemIds.length > 0 ? Math.max(...itemIds) : 0;
    const nextId = maxId + 1;

    const newItem = {
      ...itemDetails,
      id: nextId,
    };

    const newList = [ newItem, ...items];
    setItems(newList);
  }

  return (
    <div>
      <AddItem addItem={addItem} /> 
      <List items={items} onDelete={deleteItem} />
    </div>
  );
}

export default HomePage;