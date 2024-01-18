import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Calculator from './Calculator';
import Quote from './Quote';
import Footer from './Footer';

function App() {
//   let place = "Unknown";
// switch (SomeCondition)
// {
//   case condition1: place = "Ukraine"; break;
//   case condition2: place = "Russia"; break;
//   case condition3: place = "US"; break;
//   default: place = "World"; break;
// }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
