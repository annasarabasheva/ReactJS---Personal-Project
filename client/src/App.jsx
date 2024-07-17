import React from 'react';
import './styles.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import {Route, Routes} from 'react-router-dom'

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>

            <Footer />
        </>
    );
}

export default App;
