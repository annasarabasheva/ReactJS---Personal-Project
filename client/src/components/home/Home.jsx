import { useNavigate } from "react-router-dom";
import styles from './Home.module.css';

export default function Home() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/about');
    };

    return (
        <main className={styles.main}>
            <h1 className={styles.title}>WELCOME TO THE ART COMPANY</h1>
            <div className={styles.buttonContainer}>
                <button className={styles.clickMe} role="button" onClick={handleClick}>
                    Click Me, Please
                </button>
            </div>
        </main>
    );
}
