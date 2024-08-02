import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import { Route, Routes, useNavigate } from 'react-router-dom';
import About from './components/about/About';
import Gallery from './components/gallery/Gallery';
import ArtCreate from './components/art-create/ArtCreate';
import Register from './components/register/Register';
import Login from './components/login/Login';
import ArtDetails from './components/art-details/ArtDetails';
import AuthContext from './contexts/authContext';
import * as authService from './services/authService';
import Logout from './components/logout/Logout';

function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState(() => {
        localStorage.removeItem('accessToken');
        return {};
    });

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
        localStorage.removeItem('accessToken');
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
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/gallery/:artID/details" element={<ArtDetails />} />
                <Route path="/create" element={<ArtCreate />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>

            <Footer />
        </AuthContext.Provider>
    );
}

export default App;
