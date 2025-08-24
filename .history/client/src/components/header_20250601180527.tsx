import logo from '../assets/logo.png';

function Header() {
    return (
        <header>
            <img src={logo} alt="Logo" className="logo" />
            <h1>147Fitness Store</h1>
        </header>
    );
}

export default Header;
