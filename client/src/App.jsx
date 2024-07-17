import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import {Route, Routes} from 'react-router-dom'
import About from './components/about/About';


function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/" element={<About/>}/>
        
            </Routes>

            <Footer />
        </>
    );
}

export default App;
