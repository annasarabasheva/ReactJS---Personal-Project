import styles from './Register.module.css'
import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <div className={styles.registerContainer}>
              <div className={styles.container}>
                <h1>Register</h1> 
                <form>
                    <div className={styles.formGroup}>
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" placeholder="Username.." />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" name="email" placeholder="Email.." />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" placeholder="Password.." />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="rePassword">Confirm Password:</label>
                        <input type="password" id="rePassword" name="rePassword" placeholder="Repeat Password.." />
                    </div>

                    <input type="submit" value="Submit" className={styles.submitButton} />
                    
                </form>

                <p>Already have an account? <Link to="/login">Login here</Link></p>
            </div>
        </div>
    )
}