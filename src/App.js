import {DataProvider} from "./Context/Context";
import {useContext} from 'react';
import DataContext from './Context/Context';
// Import Components
import Header from './Components/Navbar/Header';
import Pages from './Components/Pages/Pages';
// Import NPM Packages
import {BrowserRouter} from 'react-router-dom'

function App() {
    const {mode} = useContext(DataContext);

  return (
    <div className={`App ${mode === 'light' ? 'text-black' : 'text-light'}`}>
        <DataProvider>
              <BrowserRouter>
                <Header/>
                <Pages/>
              </BrowserRouter>
        </DataProvider>
    </div>
  );
}

export default App;
