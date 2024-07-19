import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import {Route, Routes} from 'react-router-dom'
import About from './components/about/About';
import Gallery from './components/gallery/Gallery';
import CreateArt from './components/create-art/CreateArt';
import Register from './components/register/Register';
import Login from './components/login/Login';
import DetailsArt from './components/details-art/DetailsArt';


function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/gallery" element={<Gallery/>}/>
                <Route path="/gallery/details/:artID" element={<DetailsArt/>}/>
                <Route path="/create" element={<CreateArt/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>

        
            </Routes>

            <Footer />
        </>
    );
}

export default App;
