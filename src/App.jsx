import { useState } from 'react';
import './App.css'
import Dashboard from './components/Dashboard'
import ThemeContext from './context/ThemeContext';
import StockContext from './context/StockContext';
import ModalWrapper from './components/ModalWrapper';
import CloseIcon from './components/CloseIcon';
import ModalContext from './context/ModalContext';
import ModalOpener from './components/ModalOpener';
import Popup from './components/Popup';

function App() {
  const [darkMode,setDarkMode] = useState(false);
  const [stockSymbol,setStockSymbol] = useState("META");
  const [isModalOpened,setIsModalOpened] = useState(false)

  return(
    <ThemeContext.Provider value={{darkMode,setDarkMode}}>
      <StockContext.Provider value={{stockSymbol,setStockSymbol}}>
        <ModalContext.Provider value={{isModalOpened,setIsModalOpened}}>
          <ModalOpener/><ModalWrapper><CloseIcon/><Popup/></ModalWrapper>
        </ModalContext.Provider>
        <Dashboard/>
      </StockContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App
