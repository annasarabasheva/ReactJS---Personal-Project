import styles from './Login.module.css'
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className={styles.loginContainer}>
              <div className={styles.container}>
                <h1>Login</h1> 
                <form>

                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" name="email" placeholder="Email.." />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" placeholder="Password.." />
                    </div>

                    <input type="submit" value="Submit" className={styles.submitButton} />
                    
                </form>

                <p>You dont have an account? <Link to="/register">Register here</Link></p>
            </div>
        </div>
    )
}