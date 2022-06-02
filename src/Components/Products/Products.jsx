import {productList} from './ProductsList';
import {Row, Col, Card, Container, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import {useContext} from "react";
import DataContext from "../../Context/Context";

function Products() {

    const {basketItem, setBasketItem} = useContext(DataContext);

    return (
        <Container className='mt-4'>
            <h2 className='text-center'>Our Products</h2>
        <Row xs={1} md={2} lg={3} xl={4} className='g-5 mt-4'>
            {
                productList.map((product) => {
                    return (
                        <Col key={product.id}>
                            <Card className='bg-opacity-75 bg-light align-items-center text-dark' >
                                <LinkContainer to={`/Products/${product.id}`}>
                                    <Card.Link>
                                        <Card.Img src={product.image} />
                                    </Card.Link>
                                </LinkContainer>
                                <Card.Body>
                                    <Card.Text>
                                        <p>{product.name} {product.price}</p>
                                    </Card.Text>
                                    <Card.Text className='text-center'>
                                            <Button variant="success" className="mx-4" onClick={() => {
                                                setBasketItem([...basketItem, product]);}}>Add to Card</Button>
                                    </Card.Text>
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