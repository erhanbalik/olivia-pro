import Login from './Login';
import MainMenu from './MainMenu';
import Products from '../Products/Products';
import ProductDetail from "../Products/ProductDetail";
import {Route, Routes} from "react-router-dom";

const Pages = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainMenu/>}/>
                <Route path="Login" element={<Login/>} />
                <Route path="Products" element={<Products/>} />
                <Route path="Products/:id" element={<ProductDetail/>} />
            </Routes>
        </>
    );
}

export default Pages;