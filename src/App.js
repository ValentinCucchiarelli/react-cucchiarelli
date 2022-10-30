import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <><Navbar />
      <ItemListContainer greeting={true} />
    </>
  );
}

export default App;