import BasketSingleItem from './BasketSingleItem';
import {Button, Offcanvas, Container, Row} from 'react-bootstrap';
import {RiShoppingBasketLine} from 'react-icons/ri';
import {useContext, useEffect} from "react";
import DataContext from "../../Context/Context";

function Basket () {
    const {basket, basketShow, handleClose, basketItem, handleDelete, value ,setValue} = useContext(DataContext);

    const totalVal = () => {
        let total = 0;
        [...basketItem].map((item) => {
            return (
                total = parseInt(item.price) + parseInt(value),
                setValue(total)
            )
        })
    }
    useEffect(() => {
        totalVal();
    }, [basketItem, setValue]);
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
                            <Container className="pb-3">
                                <Row xs={2}>
                                <p>Total Value: {value}</p>
                                <Button variant="danger" onClick={handleDelete} >
                                    {basketItem.length === 1 ? "Delete" : "Delete All"}
                                </Button>
                                </Row>
                            </Container>
                            {
                                basketItem.map((item) => {
                                    return (
                                        <div key={item.id}>
                                            <BasketSingleItem item={item}/>
                                        </div>
                                    )
                                })
                            }

                        </Offcanvas.Body>
                        : <Container> <p className='text-center'>Your Basket Empty</p></Container>
                }
            </Offcanvas>
        </>
    )
}
export default Basket;