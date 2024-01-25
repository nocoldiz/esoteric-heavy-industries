import React from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import HeaderComponent from './components/Header/Header';
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <HeaderComponent></HeaderComponent>
    </div>
  );
}

export default App;
