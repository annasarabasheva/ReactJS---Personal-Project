import styles from './Register.module.css';
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

const validate = (values) => {
    const errors = {};

    if (!values[RegisterFormKeys.Username]) {
        errors[RegisterFormKeys.Username] = 'Username is required';
    }

    if (!values[RegisterFormKeys.Email]) {
        errors[RegisterFormKeys.Email] = 'Email is required';
    } else {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(values[RegisterFormKeys.Email])) {
            errors[RegisterFormKeys.Email] = 'Please provide a valid email';
        }
    }

    if (!values[RegisterFormKeys.Password]) {
        errors[RegisterFormKeys.Password] = 'Password is required';
    }

    if (!values[RegisterFormKeys.ConfirmPassword]) {
        errors[RegisterFormKeys.ConfirmPassword] = 'Confirm Password is required';
    } else if (values[RegisterFormKeys.Password] !== values[RegisterFormKeys.ConfirmPassword]) {
        errors[RegisterFormKeys.ConfirmPassword] = 'Passwords do not match';
    }

    return errors;
};

export default function Register() {
    const { registerSubmitHandler } = useContext(AuthContext);
    const { values, errors, submitError, onChange, onSubmit } = useForm(registerSubmitHandler, {
        [RegisterFormKeys.Username]: '',
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: '',
    }, validate);


    const errorStyle = {
        color: 'rgb(153, 6, 6)',
        marginTop: '0.5em',
        fontSize: '40px',
        textDecoration: 'underline',
    };

    return (
        <div className={styles.registerContainer}>
            <div className={styles.container}>
                <h1>Register</h1>
                <form onSubmit={onSubmit}>
                    {submitError && <p style={errorStyle}>{submitError}</p>}
                    <div className={styles.formGroup}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name={RegisterFormKeys.Username}
                            placeholder="Username.."
                            onChange={onChange}
                            value={values[RegisterFormKeys.Username]}
                        />
                        {errors[RegisterFormKeys.Username] && <p style={errorStyle}>{errors[RegisterFormKeys.Username]}</p>}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="text"
                            id="email"
                            name={RegisterFormKeys.Email}
                            placeholder="Email.."
                            onChange={onChange}
                            value={values[RegisterFormKeys.Email]}
                        />
                        {errors[RegisterFormKeys.Email] && <p style={errorStyle}>{errors[RegisterFormKeys.Email]}</p>}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name={RegisterFormKeys.Password}
                            placeholder="Password.."
                            onChange={onChange}
                            value={values[RegisterFormKeys.Password]}
                        />
                        {errors[RegisterFormKeys.Password] && <p style={errorStyle}>{errors[RegisterFormKeys.Password]}</p>}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="rePassword">Confirm Password:</label>
                        <input
                            type="password"
                            id="rePassword"
                            name={RegisterFormKeys.ConfirmPassword}
                            placeholder="Repeat Password.."
                            onChange={onChange}
                            value={values[RegisterFormKeys.ConfirmPassword]}
                        />
                        {errors[RegisterFormKeys.ConfirmPassword] && <p style={errorStyle}>{errors[RegisterFormKeys.ConfirmPassword]}</p>}
                    </div>

                    <input type="submit" value="Submit" className={styles.submitButton} />
                </form>

                <p>Already have an account? <Link to="/login">Login here</Link></p>
            </div>
        </div>
    );
}
