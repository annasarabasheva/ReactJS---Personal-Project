import { createContext } from "react";
import { useNavigate } from 'react-router-dom';
import usePersistedState from '../hooks/usePersistedState';
import * as authService from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});

    const loginSubmitHandler = async (values) => {
        try {
            const result = await authService.login(values.email, values.password);
            setAuth(result);
            navigate('/');
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    const registerSubmitHandler = async (values) => {
        try {
            const result = await authService.register(values.email, values.password, values.username);
            setAuth(result);
            navigate('/');
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('auth');
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username,
        email: auth.email,
        userID: auth._id,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

AuthContext.displayName = 'AuthContext';

export default AuthContext;
