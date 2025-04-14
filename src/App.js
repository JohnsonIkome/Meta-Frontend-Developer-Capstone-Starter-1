import React from 'react';
import './App.css';
import Nav from './components/Nav.js';
import Main from './components/Main.js';
import Menu from './components/Menu.js'; // Added import
import Footer from './components/Footer.js';


function App() {
  return (
    <>
      <Nav />
      <Main />
      <Menu />
      <Footer />
    </>
  );
}

export default App;