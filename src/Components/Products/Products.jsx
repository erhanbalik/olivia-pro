import {productList} from './ProductsList';
import {RiShoppingBasketLine} from 'react-icons/ri';
import {Row, Col, Card, Container, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import {useContext} from "react";
import DataContext from "../../Context/Context";

function Products() {

    const {basketItem, setBasketItem,basketShow} = useContext(DataContext);

    return (
        <Container className='mt-4'>
            <h2 className='text-center'>Our Products</h2>
        <Row xs={1} md={2} lg={3} xl={4} className='g-5 mt-4'>
            {
                productList.map((product) => {
                    return (
                        <Col key={product.id}>
                            <Card className='bg-opacity-75 bg-light align-items-center text-dark' >
                                <Card.Img style={{height: "60%", width: "90%"}} src={product.image} />
                                <Card.Body>
                                <Card.Header className='text-center'>{product.name}</Card.Header>
                                    <Card.Text>
                                        {product.description}
                                    </Card.Text>
                                    <Card.Footer className='text-center'>
                                        <LinkContainer to={`/Products/${product.id}`}>
                                            <Card.Link>View Product</Card.Link>
                                        </LinkContainer>
                                            <Button variant="success" className="mx-4" onClick={() => {
                                                setBasketItem([...basketItem, product]);
                                                basketShow();
                                            }}><RiShoppingBasketLine/></Button>
                                    </Card.Footer>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })
            }
        </Row>
        </Container>
    )
}

export default Products;