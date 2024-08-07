import { Link } from 'react-router-dom';
import styles from './Page404.module.css';

export default function Page404() {
    return (
        <div className={styles.notFoundContainer}>
            <img src="/images/error404.jpg" alt="404-ERROR" />
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link to="/" className={styles.link}>Go back to Home</Link>
        </div>
    );
}
