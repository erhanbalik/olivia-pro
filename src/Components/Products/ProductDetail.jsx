import {useParams} from 'react-router-dom';
import {productList} from './ProductsList';
import ProductAdd from './ProductAdd';
import {Carousel, Container, Row, Card, Col} from 'react-bootstrap'
import {useContext} from "react";
import DataContext from "../../Context/Context";

function ProductDetail() {
    const {mode} = useContext(DataContext);
    const {id} = useParams();

    return (
        <Container className={`text-${mode === 'light' ? 'dark' : 'light'}`}>
            <h1 className='text-center mt-5'>Product Details</h1>
            {
                productList.map((product) => {
                    if(product.id === id) {
                        return (
                            <Row key={product.id} xs={1} md={2} className='mt-4' >
                                <Col className='mt-5'>
                                    <Carousel  className='w-50'>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={product.image}
                                                alt="First slide"
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                </Col>
                                <Col className='mt-5'>
                                        <Card className='w-100 bg-transparent border-0'>
                                            <Card.Body>
                                                <Card.Title>{product.name}</Card.Title>
                                                <Card.Subtitle>
                                                    <p>Subtitle</p>
                                                </Card.Subtitle>
                                                <Card.Text>
                                                    <p>{product.description}</p>
                                                </Card.Text>
                                                <Container>
                                                    <Row xs={2}>
                                                        <Col>
                                                            <h3><p>{product.price}</p></h3>
                                                        </Col>
                                                        <ProductAdd product={product} />
                                                    </Row>
                                                </Container>
                                            </Card.Body>
                                        </Card>
                                </Col>
                            </Row>
                        )
                    } else if (product.id !== id) {
                        return null;
                    }
                })
            }

        </Container>
    )
}

export default ProductDetail;