import DataContext from "../../Context/Context";
import {useContext} from "react";
import {productList} from '../Products/ProductsList'
import {Container, Col, Row, Card, Button} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'

const Main = () => {

    const {mode} = useContext(DataContext);
    return (
        <>
            {
                productList.map((product) => {
                return (
                    <div className={`${mode === 'light' ? 'text-black' : 'text-secondary'}`}>
                        <Container className='my-5 text-center'>
                            <Card className="text-center">
                                <Card.Header>
                                    <img src={product.image} />
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>
                                            {product.description}
                                    </Card.Text>
                                    <LinkContainer to={`/Products/${product.id}`}>
                                        <Card.Link>
                                            <Button variant="primary">Details</Button>
                                        </Card.Link>
                                    </LinkContainer>
                                </Card.Body>
                                <Card.Footer className="text-muted">$ {product.price}</Card.Footer>
                            </Card>
                        </Container>
                    </div>

                )
            })
            }
        </>
    )
}

export default Main;