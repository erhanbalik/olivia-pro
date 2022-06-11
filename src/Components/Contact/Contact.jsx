import DataContext from "../../Context/Context";
import {useContext} from "react";
import {Container, Col, Form, Row, Button} from 'react-bootstrap'
const Contact = () => {
    const {mode} = useContext(DataContext);
    return (
        <div className={`${mode === 'light' ? 'text-dark' : 'text-light'}`}>
            <Container className='my-5'>
                <Col>
                    <h1>Contact Us</h1>
                    <Form>
                        <Form.Group as={Col} controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Email
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="email" placeholder="Enter email" required />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formPlaintextName">
                            <Form.Label column sm="2">
                                Name
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="password" placeholder="Name" required />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Message
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control as="textarea" rows="3" placeholder="Message" required />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className='my-4'>
                            <Col sm="10">
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Col>
            </Container>
        </div>
    )
}
export default Contact;