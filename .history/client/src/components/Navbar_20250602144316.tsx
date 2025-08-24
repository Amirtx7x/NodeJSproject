import { useState } from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
    isLoggedIn: boolean;
    setIsLoggedIn: (loggedIn: boolean) => void;
}

function Navbar({ isLoggedIn, setIsLoggedIn }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('loggedInUser');
    };

    return (
        <>
            {/* Top Right Auth Links */}
            <div className="top-auth-links">
                {isLoggedIn ? (
                    <>
                        <span style={{ marginRight: '10px' }}>Welcome!</span>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Sign Up</Link>
                    </>
                )}
            </div>

            {/* Hamburger Button */}
            <div className="hamburger-menu" onClick={() => setIsOpen(true)}>
                ☰
            </div>

            {/* Slide-Out Menu */}
            <div className={isOpen ? 'nav-menu open' : 'nav-menu'}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Catalog</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
                <div className="close-nav" onClick={() => setIsOpen(false)}>
                    <span>&times;</span>
                </div>
            </div>

            {/* Horizontal Separator */}
            <div style={{ backgroundColor: '#f5f5f5' }}>
                <hr className="nav-separator" />
            </div>
        </>
    );
}

export default Navbar;
