import React from 'react';
import './styles.css'; // Import your CSS here

function App() {
    return (
        <>
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
            <main>
                <h1>WELCOME TO THE ART COMPANY</h1>
                <button className="ClickME" role="button">Click Me, Please</button>
            </main>
            <footer>
                <p>&copy; All rights reserved</p>
            </footer>
        </>
    );
}

export default App;
