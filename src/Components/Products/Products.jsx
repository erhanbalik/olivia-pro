import {productList} from './ProductsList';
import {Row, Card, Container, Button, CardGroup} from 'react-bootstrap';
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
                        <CardGroup key={product.id}>
                            <Card className='bg-opacity-75 bg-light text-dark' >
                                <LinkContainer to={`/Products/${product.id}`}>
                                    <Card.Link>
                                        <Card.Img src={product.image} className='img-thumbnail' />
                                    </Card.Link>
                                </LinkContainer>
                                <Card.Body>
                                    <Card.Text>
                                        <p>{product.title}</p>
                                        <p>$ {product.price}</p>
                                    </Card.Text>
                                </Card.Body>
                                    <Card.Footer className='text-center bg-transparent'>
                                            <Button variant="success" className="mx-4" onClick={() => {
                                                setBasketItem([...basketItem, product]);}}>Add to Card</Button>
                                    </Card.Footer>
                            </Card>
                        </CardGroup>
                    )
                })
            }
        </Row>
        </Container>
    )
}

export default Products;