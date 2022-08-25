import './App.css'
const getItems = ({Items}) => {
    return(
        <ul>
             {Items.map((item, i) => (
                <li key={i}>Item Name: {item.Name} Item Price: {item.Price}</li>
             ))}
        </ul>

    );
}

export default getItems;