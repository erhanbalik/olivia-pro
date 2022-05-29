import Login from './Login';
import MainMenu from './MainMenu';
import {Route, Routes} from "react-router-dom";

const Pages = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainMenu/>}/>
                <Route path="login" element={<Login/>} />
            </Routes>
        </>
    );
}

export default Pages;