/* eslint-disable import/named */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CalculateContext from './context/Context';
import './App.css';
import Home from './Home';
import Calculator from './Calculator';
import Quote from './Quote';
import Footer from './Footer';

function App() {
  const [calculate, setCalculate] = React.useState({
    operator: '',
    num: 0,
    response: 0,
  });

  return (
    <>
      <CalculateContext.Provider value={{ calculate, setCalculate }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quote" element={<Quote />} />
          </Routes>
        </BrowserRouter>
      </CalculateContext.Provider>
      <Footer />
    </>
  );
}

export default App;
