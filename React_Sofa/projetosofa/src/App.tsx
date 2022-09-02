import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/statics/Nav/Navbar'
import Footer from './components/statics/Footer/Footer';
import Home from'./pages/Home/Home';
import Login from'./pages/Login/Login';
import Cadastros from'./pages/Cadastro/Cadastro';
import Sofas from'./pages/Sofas/Sofas'

import './App.css';


function App() {
  return (
    <Router>
      <Navbar />
      <div  style={{minHeight: '100vh'}}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Cadastro" element={<Cadastros />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Sofas" element={<Sofas />} />
        </Routes>
      </div>        
      <Footer />
    </Router>
  );
}

export default App;
