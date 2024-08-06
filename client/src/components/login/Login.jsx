import styles from './Login.module.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../contexts/authContext';
import useForm from '../../hooks/useForm';

const LoginFormKeys = {
    Email: 'email',
    Password: 'password'
};

const validate = (values) => {
    const errors = {};

    if (!values[LoginFormKeys.Email]) {
        errors[LoginFormKeys.Email] = 'Email is required';
    }

    if (!values[LoginFormKeys.Password]) {
        errors[LoginFormKeys.Password] = 'Password is required';
    }

    return errors;
};

export default function Login() {
    const { loginSubmitHandler } = useContext(AuthContext);
    const { values, errors, submitError, onChange, onSubmit } = useForm(loginSubmitHandler, {
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    }, validate);

    return (
        <div className={styles.loginContainer}>
            <div className={styles.container}>
                <h1>Login</h1>
                <form onSubmit={onSubmit}>
                    {submitError && <p className={styles.error}>{submitError}</p>}
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="text"
                            id="email"
                            name={LoginFormKeys.Email}
                            placeholder="Email.."
                            onChange={onChange}
                            value={values[LoginFormKeys.Email]}
                        />
                        {errors[LoginFormKeys.Email] && <p className={styles.error}>{errors[LoginFormKeys.Email]}</p>}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name={LoginFormKeys.Password}
                            placeholder="Password.."
                            onChange={onChange}
                            value={values[LoginFormKeys.Password]}
                        />
                        {errors[LoginFormKeys.Password] && <p className={styles.error}>{errors[LoginFormKeys.Password]}</p>}
                    </div>

                    <input type="submit" value="Submit" className={styles.submitButton} />
                </form>

                <p>You don't have an account? <Link to="/register">Register here</Link></p>
            </div>
        </div>
    );
}
