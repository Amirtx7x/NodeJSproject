import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <img
                src={logo}
                alt="Logo"
                className="logo"
            />
            <h1>147Fitness Store</h1>
            <nav className="header-links">
                <Link to="/">Home</Link>
                <Link to="/products">Catalog</Link>
                <Link to="/signup">Contact Us</Link>
                <a href="#" className="search-product">Search Product</a>
            </nav>
        </header>
    );
}

export default Header;
