import {useState} from 'react'

// Import Components
import Header from './Components/Navbar/Header';

import Pages from './Components/Pages/Pages';
// Import NPM Packages
import {BrowserRouter} from 'react-router-dom'

function App() {

    const [mode, setMode] = useState('light');

  return (
    <div className={`App ${mode === 'light' ? 'text-black' : 'text-light'}`}>
      <BrowserRouter>
        <Header mode={mode} setMode={setMode} />
        <Pages/>
      </BrowserRouter>
    </div>
  );
}

export default App;
