import {Button, Col} from "react-bootstrap";
import {useContext} from "react";
import DataContext from "../../Context/Context";

function ProductAdd ({product}) {
    const {setBasketItem, basketItem, setValue, value, countItem, setCountItem, handleIncrease, handleDecrease} = useContext(DataContext);

    const handleAddToBasket = () => {
        const checkBasket = basketItem.find(item => item.id === product.id);
        if (checkBasket) {
            const newBasketItem = basketItem.map(item => {
                if (item.id === product.id) {
                    return {...item, count: item.count}
                } else {
                    return item;
                }
            })
            setBasketItem(newBasketItem);
            setValue(parseInt(value) + parseInt(product.price));

        } else {
            const count = (countItem - 1) * (product.price);
            setBasketItem([...basketItem, {...product, count: countItem}]);
            setValue(parseInt(value) + parseInt(count));
            setCountItem(1)
        }

    }
    return (
        <>
            <Col>
                <Button onClick={handleAddToBasket}>Add Card</Button>
            </Col>
            <Col>
                <Button onClick={handleIncrease}>+</Button>
                <span className='mx-2'>{countItem}</span>
                <Button onClick={handleDecrease}>-</Button>
            </Col>
        </>
    )
}

export default ProductAdd;