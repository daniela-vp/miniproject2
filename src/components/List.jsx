import ItemSummary from "./ItemSummary";

function List({ items, onDelete }) {
    return (
      
        <section className="DataList">
          {items.map((item) => (
            <ItemSummary key={item.id} item={item} onDelete={onDelete} />
          ))}

        </section>
      );
    }
    
    export default List;