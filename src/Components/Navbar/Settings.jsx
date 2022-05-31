import {Dropdown} from "react-bootstrap";
// ICONS
import {AiFillSetting} from "react-icons/ai";
import {BsFillMoonFill, BsFillSunFill, BsTranslate} from "react-icons/bs";
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
        <Dropdown className='px-2'>
            <Dropdown.Toggle split='false' variant="transparent border-0" id="dropdown-basic">
                <AiFillSetting className='text-light' />
            </Dropdown.Toggle>
            <Dropdown.Menu className={`${mode === 'light' ? 'bg-light' : 'bg-secondary'}`}>
                <Dropdown.Header className={`${mode === 'light' ? 'text-secondary' : 'text-light'}`}>
                    Settings
                </Dropdown.Header>
                <Dropdown.Item onClick={changeMode}>
                    {mode === 'light' ?
                        <div>
                            <BsFillMoonFill/> <span className='px-1'>Dark</span>
                        </div>
                        : <div>
                            <BsFillSunFill/> <span className='px-1'>Light</span>
                        </div>}
                </Dropdown.Item>
                <Dropdown.Item><BsTranslate/></Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}
export default Settings;