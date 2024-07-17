import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <header>
        <img
            className="logo"
            src="/images/The Art Company Logo.png"
            alt="logo"
        />
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/logout">Logout</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/search">Search</Link></li>
            </ul>
        </nav>
    </header>
    );
}
