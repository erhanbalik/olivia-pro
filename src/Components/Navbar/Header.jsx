// Components 
import Basket from './Basket';
import Settings from './Settings'
// ICONS
import {GiHeartBottle} from 'react-icons/gi';
// NPM packages
import {Nav, Navbar, Button, Container, NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {Link} from 'react-router-dom';
import LangChang from "./LangChang";

function Header() {

    return (
        <Navbar bg="dark" collapseOnSelect variant='dark' expand="md" sticky="top">
            <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand href="#home"><GiHeartBottle/>Olivia Pro</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to='/'>
                            <Nav.Link href="#home">Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/Products'>
                            <Nav.Link href="#link">Products</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/About'>
                            <Nav.Link href="#link">About Us</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/Contact'>
                            <Nav.Link href="#link">Contact</Nav.Link>
                        </LinkContainer>
                        <NavDropdown transition='Fade' title="Settings" id="basic-nav-dropdown">
                            <Settings/>
                            <LangChang/>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Basket/>
                        <Link to='Login'>
                            <Button variant="outline-primary">Login</Button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Header;
