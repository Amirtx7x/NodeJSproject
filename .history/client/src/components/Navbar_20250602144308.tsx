import { useState } from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
    isLoggedIn: boolean;
    setIsLoggedIn: (loggedIn: boolean) => void;
}

function Navbar({ isLoggedIn, setIsLoggedIn }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const username = localStorage.getItem('loggedInUser'); // retrieve the stored username

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('loggedInUser');
    };

    return (
        <>
            {/* Top Auth Links */}
            <div className="top-auth-bar">
                {isLoggedIn && username ? (
                    <div className="welcome-container">
                        <span className="welcome-message">Welcome, {username}</span>
                        <button className="logout-button" onClick={handleLogout}>Logout</button>
                    </div>
                ) : (
                    <div className="auth-links">
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Sign Up</Link>
                    </div>
                )}
            </div>

            {/* Hamburger + Nav */}
            <div className="hamburger-menu" onClick={() => setIsOpen(true)}>☰</div>
            <div className={isOpen ? 'nav-menu open' : 'nav-menu'}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Catalog</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
                <div className="close-nav" onClick={() => setIsOpen(false)}><span>&times;</span></div>
            </div>
            <div style={{ backgroundColor: '#f5f5f5' }}>
                <hr className="nav-separator" />
            </div>
        </>
    );
}

export default Navbar;
