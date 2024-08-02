import styles from './Register.module.css'
import { Link } from 'react-router-dom';
import { useContext } from "react";

import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";

const RegisterFormKeys = {
    Username: 'username',
    Email: 'email',
    Password: 'password',
    ConfirmPassword: 'rePassword',
};


export default function Register() {

    const { registerSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        [RegisterFormKeys.Username]: '',
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: '',
    });

    return (
        <div className={styles.registerContainer}>
              <div className={styles.container}>
                <h1>Register</h1> 
                <form onSubmit={onSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name={RegisterFormKeys.Username} placeholder="Username.." onChange={onChange} value={values[RegisterFormKeys.Username]}/>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" name={RegisterFormKeys.Email} placeholder="Email.." onChange={onChange} value={values[RegisterFormKeys.Email]}/>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name={RegisterFormKeys.Password} placeholder="Password.." onChange={onChange} value={values[RegisterFormKeys.Password]}/>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="rePassword">Confirm Password:</label>
                        <input type="password" id="rePassword" name={RegisterFormKeys.ConfirmPassword} placeholder="Repeat Password.." onChange={onChange} value={values[RegisterFormKeys.ConfirmPassword]}/>
                    </div>

                    <input type="submit" value="Submit" className={styles.submitButton} />
                    
                </form>

                <p>Already have an account? <Link to="/login">Login here</Link></p>
            </div>
        </div>
    )
}