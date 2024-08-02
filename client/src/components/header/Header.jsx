import { Link } from 'react-router-dom';
import styles from './Header.module.css'; 
import { useContext } from 'react';
import AuthContext from '../../contexts/authContext';

export default function Header() {

    const {
        isAuthenticated,
        username
    } = useContext(AuthContext);
    
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
                    <li><Link className={styles.navLink} to="/search">Search</Link></li>
                    {isAuthenticated && (
                        <>
                            <li><Link className={styles.navLink} to="/create">Share your Art | {username}</Link></li>
                            <li><Link className={styles.navLink} to="/logout">Logout</Link></li>
                        </>
                        
                    )}
                    {!isAuthenticated && (
                        <>
                            <li><Link className={styles.navLink} to="/login">Login</Link></li>
                            <li><Link className={styles.navLink} to="/register">Register</Link></li>
                        
                        </>
                    )}
                    
                   
                   
                </ul>
            </nav>
        </header>
    );
}
