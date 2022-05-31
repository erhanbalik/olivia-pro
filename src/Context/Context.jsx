import {createContext, useState, useEffect} from "react";

const DataContext = createContext({});

export const DataProvider = ({children}) => {
    // Dark and Light Mode State
    const [mode, setMode] = useState('light');
    // Basket Show State
    const [basket, setBasket] = useState(false);
    const basketShow = () => setBasket(true);
    const handleClose = () => setBasket(false);
    // Basket Item State
    const [basketItem, setBasketItem] = useState([]);
    const handleDelete = () => {
        setBasketItem([]);
    }

    return (
        <DataContext.Provider value={{
            mode,setMode,
            basket, setBasket, basketShow, handleClose,
            basketItem, setBasketItem, handleDelete
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;