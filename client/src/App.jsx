import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import {Route, Routes} from 'react-router-dom'
import About from './components/about/About';
import Gallery from './components/gallery/Gallery';
import ArtCreate from './components/art-create/ArtCreate';
import Register from './components/register/Register';
import Login from './components/login/Login';
import ArtDetails from './components/art-details/ArtDetails';


function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/gallery" element={<Gallery/>}/>
                <Route path="/gallery/:artID/details" element={<ArtDetails/>}/>
                <Route path="/create" element={<ArtCreate/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>

            </Routes>

            <Footer />
        </>
    );
}

export default App;
