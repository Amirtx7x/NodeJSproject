import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Joinus from './pages/Joinus';          // Renamed correctly
import Login from './pages/Login';            // NEW
import SignUp from './pages/Signup';          // NEW
import Header from './components/header';
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
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Joinus />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
