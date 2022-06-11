
import {useState} from "react";
import {BsTranslate} from "react-icons/bs";
import {NavDropdown} from "react-bootstrap";

const LangChang = () => {

    const [lang, setLang] = useState('en');
    const langHandler = () => {
        setLang(lang === 'en' ? 'tr' : 'en');
    }
    return (
        <NavDropdown.Item  onClick={langHandler}>
            {lang === 'en' ?
                <>
                    <BsTranslate/><span className='px-3'>En</span>
                </>
                : <>
                    <BsTranslate/><span className='px-3'>Tur</span>
                </>
            }
        </NavDropdown.Item>
    )
}

export default LangChang;