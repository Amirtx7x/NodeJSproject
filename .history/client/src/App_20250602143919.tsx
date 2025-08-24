import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';
import Joinus from './pages/Joinus';     // Contact Us page
import Login from './pages/Login';
import Signup from './pages/Signup';
import Header from './components/header'; // Capitalized for consistency
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // ✅ Login state

  return (
    <>
      <Header />
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div id="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/contact" element={<Joinus />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
