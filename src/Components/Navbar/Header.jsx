// Components 
import Basket from './Basket';
import Settings from './Settings'
// ICONS
import {GiHeartBottle} from 'react-icons/gi';
// NPM packages
import {Nav, Navbar, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {Link} from 'react-router-dom';

function Header() {

    return (

            <Navbar className="nav justify-content-around text-bg-light navbar-dark bg-dark navbar-collapse" >
                <LinkContainer to="/">
                    <Navbar.Brand><GiHeartBottle/><span className='px-1'>Olivia</span></Navbar.Brand>
                </LinkContainer>
                <Nav className="mr-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/Products">
                        <Nav.Link>Products</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/About">
                        <Nav.Link>About Us</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/Contact">
                        <Nav.Link>Contact Us</Nav.Link>
                    </LinkContainer>
                </Nav>

                <Nav className="ml-auto">
                    <Basket />
                    <Settings/>
                    <Link to='Login' >
                        <Button>LogIn</Button>
                    </Link>
                </Nav>
            </Navbar>

    )
}
export default Header;
