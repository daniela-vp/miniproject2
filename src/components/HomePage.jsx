import { useState } from "react";
import data from "../assets/data/data.json"
import List from "./List";

function HomePage() {
    const [items, setItems] = useState(data);
  
    const deleteItem = (id) => {
      const newList = items.filter((item) => item.id !== id);
      setItems(newList);
    };
  
    return (
      <div>
        <List items={items} onDelete={deleteItem} />
      </div>
    );
  }
  
  export default HomePage;