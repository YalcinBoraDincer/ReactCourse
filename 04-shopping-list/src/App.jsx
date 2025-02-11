import { useState } from "react";
import {data} from './data.js';
import Header from "./components/header.jsx";
import Form from "./components/Form.jsx";
import List from "./components/List,.jsx";
import Summmary from "./components/Summary.jsx";

function App(){
  
  const [items,setitems] = useState([]);
  //const [itemsCount,setItemsCount] = useState(0);
  
  function handleAddItem(item){
    setitems((items) => [...items,item] );
  }

  function handleDeleteItem(id){
    setitems((items) => items.filter(item => item.id !== id));
  }

  function handleUpdateItem(id){
    setitems(items => items.map(item => item.id == id ? {...item, complated: !item.complated} : item));
  }
  function handleClearList(){
    const confirm =window.confirm("Listedeki tum urunleri silmek istediginize emin misiniz ?");
    if (confirm) {
      setitems([]);
    }
  }
  return(
    <div className="app">
      <Header/>
      <Form onAddItem={handleAddItem} onClearList={handleClearList}/>
      <List items={items} onDeleteItem={handleDeleteItem} onUpdateItem = {handleUpdateItem} />
      <Summmary items ={items} />
    </div>
  );
}
export default App