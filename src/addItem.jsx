import './App.css'

const AddItems = ({ submitHandler, Newitem, newPrice,handleAdd}) => {
    return (

        <form onSubmit={submitHandler}>
            <input
                type="text"
                className="blah"
                onChange={Newitem}
            />
               <input
                type="number"
                step="0.01"
                className="blah"
                onChange={newPrice}
            />
            <button
                type="button"
                className="blah"
                onClick={handleAdd}
            >
                Add an item
          </button>
        </form>
        
    );
}

export default AddItems;