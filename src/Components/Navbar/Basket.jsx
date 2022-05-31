import {Button, Offcanvas} from 'react-bootstrap';
import {RiShoppingBasketLine} from 'react-icons/ri';
import {useContext} from "react";
import DataContext from "../../Context/Context";

function Basket () {
    const {basket,basketShow,handleClose,basketItem, handleDelete} = useContext(DataContext);

    return (
        <>
        <Button className='bg-transparent border-0' onClick={basketShow}>
            <RiShoppingBasketLine/>
        </Button>
            <Offcanvas show={basket} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Your Items</Offcanvas.Title>
                </Offcanvas.Header>
                { // If there are items in the basket then show them
                    basketItem.length > 0 ?
                        <Offcanvas.Body>
                            {
                                basketItem.map((item) => {
                                    return (
                                        <div key={item.id}>
                                            <h5>{item.name}</h5>
                                            <p>{item.price}</p>
                                        </div>
                                    )
                                })
                            }
                            <Button variant="danger" onClick={handleDelete} >
                                {basketItem.length === 1 ? "Delete" : "Delete All"}
                            </Button>
                        </Offcanvas.Body>
                        : <p className='text-center'>Your Basket Empty</p>
                }
            </Offcanvas>
        </>
    )
}
export default Basket;