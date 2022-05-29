// Components
import Basket from './Basket';
// ICONS
import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs';
import {GiHeartBottle} from 'react-icons/gi';
// NPM packages
import {Nav, Navbar, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {Link} from 'react-router-dom';

function Header({mode, setMode}) {

    const changeMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = '#343a40';
        } else {
            setMode('light');
            document.body.style.backgroundColor = '#f8f9fa';
        }
    }
    return (

            <Navbar className="nav justify-content-around text-bg-light navbar-dark bg-dark navbar-collapse" >
                <LinkContainer to="/">
                    <Navbar.Brand><GiHeartBottle/><span className='px-1'>Olivia</span></Navbar.Brand>
                </LinkContainer>
                <Nav className="mr-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/product">
                        <Nav.Link>Products</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/about">
                        <Nav.Link>About Us</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/contact">
                        <Nav.Link>Contact Us</Nav.Link>
                    </LinkContainer>
                </Nav>
                <div>
                    <Button onClick={changeMode} variant={`${mode === 'light' ? 'dark' : 'light'}`}>
                        {mode === 'light' ? <BsFillSunFill/> : <BsFillMoonFill/>}
                    </Button>
                    <Basket />
                    <Link to='login'>
                    <Button>LogIn</Button>
                    </Link>
                </div>
            </Navbar>

    )
}
export default Header;
