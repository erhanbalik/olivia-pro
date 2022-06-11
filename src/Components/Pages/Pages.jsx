import Login from './Login';
import MainMenu from './MainMenu';
import Products from '../Products/Products';
import ProductDetail from "../Products/ProductDetail";
import Abouth from '../Abouth/Abouth';
import Contact from '../Contact/Contact';
import {Route, Routes} from "react-router-dom";

const Pages = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainMenu/>}/>
                <Route path="Login" element={<Login/>} />
                <Route path="Products" element={<Products/>} />
                <Route path="Products/:id" element={<ProductDetail/>} />
                <Route path="About" element={<Abouth/>} />
                <Route path="Contact" element={<Contact/>} />
            </Routes>
        </>
    );
}

export default Pages;