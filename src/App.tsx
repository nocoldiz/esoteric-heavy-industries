import React from 'react';
//import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import Header from './components/Header/Header';
import Typography from './components/Typography/Typography';
import Navbar from './components/Navbar/Navbar';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Container fluid>

        
        <Header></Header>
        <Typography></Typography>

      </Container>
    </div>
  );
}

export default App;
