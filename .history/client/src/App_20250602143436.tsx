import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Joinus from './pages/Joinus';       // Contact Us page
import Login from './pages/Login';         // Login page
import Signup from './pages/Signup';       // Sign Up page
import Header from './components/header';  // Capitalize consistently
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <div id="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Joinus />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
