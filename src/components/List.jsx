import ListItem from "./ListItem";
function List({ items, onDelete }) {
    return (
        <section className="DataList">
          {items.map((item) => (
            <ListItem key={item.id} item={item} onDelete={onDelete} />
          ))}
        </section>
      );
    }
    
    export default List;