import {Row, Col, Card} from 'react-bootstrap'
import {useContext} from "react";
import DataContext from "../../Context/Context";
function BasketSingleItem ({item}) {

    // TODO : Calculate the total value of the basket
    // TODO : Check if the item is already in the basket
    // TODO : If the item is already in the basket then increase the count
    // TODO : Show how many items added to the basket

    const {countItem} = useContext(DataContext);

    return (
        <Card className='align-items-center justify-content-center text-center'>
            <Row xs={3}>
                <Col>
                    <Card.Img variant="top" src={item.image}  />
                </Col>
                <Col>
                    <Card.Body>
                        <Card.Subtitle>{item.name}</Card.Subtitle>
                        <Card.Text>
                            <p>Price: {item.price}</p>
                        </Card.Text>
                    </Card.Body>
                </Col>
                <Col>
                    <span>Pcs: {countItem}</span>
                </Col>

            </Row>
        </Card>
    )
}

export default BasketSingleItem;