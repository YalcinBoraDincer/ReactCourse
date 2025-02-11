export default function Item({ item, onDeleteItem ,onUpdateItem}){
    return(
      <li>
        <input type="checkbox" checked={item.complated} onChange={() => onUpdateItem(item.id)} />
        <span style={item.complated ? {textDecoration:"line-through"}:{}}> {item.quantitiy} {item.title}</span>
        <button onClick={() => onDeleteItem(item.id)}>X</button>
  
      </li>
    );
  
  }