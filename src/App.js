import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Home from '../src/components/Home/Home';
import Footer from '../src/components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/category/:idcategory" element={<ItemListContainer />} />
          <Route exact path="/" element={<Home />} />

        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;