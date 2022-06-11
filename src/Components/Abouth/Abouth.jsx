import {useContext} from "react";
import DataContext from "../../Context/Context";
import {Container, Col} from 'react-bootstrap'

const Abouth = () =>{

    const {mode} = useContext(DataContext);

    return (
        <div className={`${mode === 'light' ? 'text-black' : 'text-light'}`}>
            <Container className='my-5 text-center'>
                <Col>
                    <h1>About Us</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </Col>
            </Container>
        </div>
    );
}

export default Abouth;