import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <nav style={{ padding: '1rem', backgroundColor: '#eee' }}>
            <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
            <Link to="/products" style={{ marginRight: '1rem' }}>Products</Link>
            <Link to="/signup">Signup</Link>
        </nav>
    );
}

export default Navbar;
