import styles from './Login.module.css'
import { Link } from 'react-router-dom';
import useForm from "../../hooks/useForm";
import { useContext } from 'react';
import AuthContext from '../../contexts/authContext';

const LoginFormKeys = {
    Email: 'email',
    Password: 'password'
}


export default function Login() {
    const {loginSubmitHandler} = useContext(AuthContext)

    const {values, onChange, onSubmit} = useForm(loginSubmitHandler,
        {[LoginFormKeys.Email]: '', [LoginFormKeys.Password]: ''}
    )

    return (
        <div className={styles.loginContainer}>
              <div className={styles.container}>
                <h1>Login</h1> 
                <form onSubmit={onSubmit}>

                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" name={LoginFormKeys.Email} placeholder="Email.." onChange={onChange} value={values[LoginFormKeys.Email]}/>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name={LoginFormKeys.Password} placeholder="Password.." onChange={onChange} value={values[LoginFormKeys.Password]}/>
                    </div>

                    <input type="submit" value="Submit" className={styles.submitButton} />
                    
                </form>

                <p>You dont have an account? <Link to="/register">Register here</Link></p>
            </div>
        </div>
    )
}