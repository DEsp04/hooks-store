import './App.css';
import HomePage from "./components/HomePage";
import { useState } from "react";


//state is like a repository of data
//hooks: state (you put a default value but it is immutable, unless you
//use the useState), useEffect, and useRef

function App() {
  //useState is a hook
  //itemCurrentlyOnSale (current value)
  /* setItemCurrentlyOnSale (make current value mutable) or make
  itemCurrentlyOnSale dynamic */
  const [itemCurrentlyOnSale, setItemCurrentlyOnSale] = useState('A Hammer'); 
  const [editable, setEditable] = useState(true);

  //event is when we click the button
  const toggleEditSaleItem = (event) => setEditable(!editable);

  const handleItemCurrentlyOnSaleChange = (event) => {
    const itemCurrentlyOnSale = event.target.value;
    setItemCurrentlyOnSale(itemCurrentlyOnSale);
  }

  return (
    <div className="App">
      <HomePage saleItem={itemCurrentlyOnSale}
        editable={editable} toggleEditSaleItem={toggleEditSaleItem}
        handleItemCurrentlyOnSaleChange={handleItemCurrentlyOnSaleChange}/>
    </div>
  );
}

export default App;
