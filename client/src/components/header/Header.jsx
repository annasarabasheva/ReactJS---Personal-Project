import { Link } from 'react-router-dom';
import styles from './Header.module.css'; 

export default function Header() {
    return (
        <header className={styles.header}>
            <img
                className={styles.logo} 
                src="/images/The Art Company Logo.png"
                alt="logo"
            />
            <nav>
                <ul className={styles.navList}>
                    <li><Link className={styles.navLink} to="/">Home</Link></li>
                    <li><Link className={styles.navLink} to="/about">About Us</Link></li>
                    <li><Link className={styles.navLink} to="/gallery">Gallery</Link></li>
                    <li><Link className={styles.navLink} to="/create">Share your Art</Link></li>
                    <li><Link className={styles.navLink} to="/login">Login</Link></li>
                    <li><Link className={styles.navLink} to="/logout">Logout</Link></li>
                    <li><Link className={styles.navLink} to="/register">Register</Link></li>
                    <li><Link className={styles.navLink} to="/search">Search</Link></li>
                </ul>
            </nav>
        </header>
    );
}
