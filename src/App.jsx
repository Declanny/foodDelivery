// src/App.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';

import Menu from './components/menu/Menu';
import Chefs from './components/chefs/Chefs';
//Auth Import
import Login from './components/auth/login/Login';
import SignUp from './components/auth/signUp/SignUp';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/chefs" element={<Chefs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
