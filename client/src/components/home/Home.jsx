import { useNavigate } from "react-router-dom";
import styles from './Home.module.css';
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";

export default function Home() {
    const navigate = useNavigate();
    const {
        isAuthenticated,
        username
    } = useContext(AuthContext);

    const handleClick = () => {
        navigate('/about');
    };

    return (
        <main className={styles.main}>
            {isAuthenticated && (
                <h1 className={styles.title}>WELCOME TO THE ART COMPANY, {isAuthenticated && (<span className={styles.username}>{username}</span>)}</h1>
            )}

            {!isAuthenticated &&  <h1 className={styles.title}>WELCOME TO THE ART COMPANY</h1>}
           
            <div className={styles.buttonContainer}>
                <button className={styles.clickMe} role="button" onClick={handleClick}>
                    Click Me, Please
                </button>
            </div>
        </main>
    );
}
