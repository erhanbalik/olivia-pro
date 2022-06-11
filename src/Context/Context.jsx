import {createContext, useState} from "react";

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
    // Delete item from basket
    const handleDelete = () => {
        setBasketItem([]);
        setValue("0");
        setItemCount(1);
        setSingleItemPrice();
    }
    // Count Total Basket Value State
    const [value, setValue] = useState("0");
    // Single Item Count State
    const [itemCount, setItemCount] = useState(1);
    const [countItem, setCountItem] = useState(1);
    const handleIncrease = () => {
        setCountItem(countItem + 1);
    }
    const handleDecrease = () => {
        if (countItem > 1) {
            setCountItem(countItem - 1);
        }
    }
    // Single Item Price State
    const [singleItemPrice, setSingleItemPrice] = useState();

    // PRODUCT API STATE
    const [product, setProduct] = useState([]);

    return (
        <DataContext.Provider value={{
            mode,setMode,
            basket, setBasket, basketShow, handleClose,
            basketItem, setBasketItem, handleDelete,
            value, setValue, itemCount, setItemCount,
            singleItemPrice, setSingleItemPrice,
            countItem, setCountItem, handleIncrease, handleDecrease,
            product, setProduct
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;