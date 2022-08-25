import { useState } from "react"
import AddItem from "./addItem";
import ItemsList from "./ItemsList";
const Basket = () => {
    const [item, setItem] = useState("");
    const [Items, setItems] = useState([]);
    const [price, setPrice] = useState("");

const Newitem = ({target}) => {
    setItem(target.value);
}

const newPrice = ({target}) => {
    setPrice(target.value);
}


const submitItem = (e) => {
    e.preventDefault();
}

const handleList = () => {
    setItems(Items => [... Items, {Name: item, Price: price}])
}

return(
          <div className='App'>
        <header className='App-header'>
        <>
    <AddItem submitHandler={submitItem} Newitem = {Newitem} newPrice={newPrice} handleAdd={handleList} />
    <h2><ItemsList Items = {Items}/></h2>
    </>
    </header>
    </div>

);

}

export default Basket;
