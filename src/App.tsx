import React from 'react';
//import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import Header from './components/Header/Header';
import Typography from './components/Typography/Typography';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Typography></Typography>
    </div>
  );
}

export default App;
