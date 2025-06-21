import { useState } from 'react';
import './App.css'
import Dashboard from './components/dashboard'
import ThemeContext from './context/ThemeContext';
import StockContext from './context/StockContext';
import ModalWrapper from './components/ModalWrapper';
import CloseIcon from './components/CloseIcon';

function App() {
  const [darkMode,setDarkMode] = useState(false);
  const [stockSymbol,setStockSymbol] = useState("META");

  return(
    <ThemeContext.Provider value={{darkMode,setDarkMode}}>
      <StockContext.Provider value={{stockSymbol,setStockSymbol}}>
        <ModalWrapper><CloseIcon/></ModalWrapper>
        <Dashboard/>
      </StockContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App
