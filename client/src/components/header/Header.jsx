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
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">Logout</a></li>
                <li><a href="#">Register</a></li>
                <li><a href="#">Search</a></li>
            </ul>
        </nav>
    </header>
    );
}
