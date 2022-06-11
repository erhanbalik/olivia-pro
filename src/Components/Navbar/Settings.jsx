import {Dropdown} from "react-bootstrap";
// ICONS
import {BsFillMoonFill, BsFillSunFill} from "react-icons/bs";
// CONTEXT API
import {useContext} from 'react';
import DataContext from '../../Context/Context';

function Settings() {
    // DATA from Context
    const {mode,setMode} = useContext(DataContext);

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
                <Dropdown.Item onClick={changeMode}>
                    {mode === 'light' ?
                        <div>
                            <BsFillMoonFill/> <span className='px-1'>Dark</span>
                        </div>
                        : <div>
                            <BsFillSunFill/> <span className='px-1'>Light</span>
                        </div>}
                </Dropdown.Item>
    )
}
export default Settings;