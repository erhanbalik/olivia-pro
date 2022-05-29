import {useState} from 'react';
import {Button, Offcanvas} from 'react-bootstrap';
import {RiShoppingBasketLine} from 'react-icons/ri';

function Basket () {

    const [basket, setBasket] = useState(false);
    const basketShow = () => setBasket(true);
    const handleClose = () => setBasket(false);

    return (
        <>
        <Button className='bg-transparent border-0' onClick={basketShow}>
            <RiShoppingBasketLine/>
        </Button>
            <Offcanvas show={basket} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Your Items</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
export default Basket;