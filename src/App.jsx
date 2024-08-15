import { useState } from "react";
import { Routes, Route, NavLink } from 'react-router-dom'
import data from "./assets/data/data.json";


import Navbar from './homepage/Navbar'
import Footer from './homepage/Footer'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import NotFound from './components/NotFoundPage'
import ItemDetailsPage from './components/ItemDetailsPage'
import UpdateItem from "./components/UpdateItem";


function App() {
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

    const newList = [newItem, ...items];
    setItems(newList);
  };
  const updateItem = (updatedItem) => {
    const newList = items.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setItems(newList);
  };


  return (
    <>
      <Navbar />
      <nav>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/about">   |  About </NavLink>
      </nav>

      <Routes>

        <Route path="/" element={<HomePage
          items={items}
          onDelete={deleteItem}
          onAddItem={addItem}
        />} />
        <Route path="/about" element={<AboutPage/>}/>
    
        <Route path="/items/:itemId" element={<ItemDetailsPage items={items} />} />

        <Route path="/updateitem/:itemId" element={<UpdateItem data={items} updateData={updateItem} />} />
        
        <Route path="/*" element={<NotFound />} />

      </Routes>


      <Footer />

    </>


  )
}

export default App;

