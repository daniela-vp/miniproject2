import List from "./List";
import AddItem from "./AddItem";
import { useEffect } from "react";


function HomePage({ items, onDelete, onAddItem }) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <AddItem addItem={onAddItem} />
      <List items={items} onDelete={onDelete} />
    </div>
  );
}

export default HomePage;