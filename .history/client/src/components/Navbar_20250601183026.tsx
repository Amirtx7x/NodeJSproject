import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="hamburger-menu" onClick={() => setIsOpen(true)}>
                ☰
            </div>

            <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Catalog</Link></li>
                    <li><Link to="/signup">Contact Us</Link></li>
                    <li><a href="#" className="search-product">Search Product</a></li>
                </ul>
                <div className="close-nav" onClick={() => setIsOpen(false)}>
                    <span>&times;</span>
                </div>
            </div>
        </>
    );
}

export default Navbar;
