import Login from './Login';
import MainMenu from './MainMenu';
import Products from '../Products/Products';
import {Route, Routes} from "react-router-dom";

const Pages = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainMenu/>}/>
                <Route path="Login" element={<Login/>} />
                <Route path="Products" element={<Products/>} />
            </Routes>
        </>
    );
}

export default Pages;