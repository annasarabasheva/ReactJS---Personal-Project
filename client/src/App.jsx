import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import {Route, Routes} from 'react-router-dom'
import About from './components/about/About';
import Gallery from './components/gallery/Gallery';
import CreateArt from './components/create-art/CreateArt';


function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/gallery" element={<Gallery/>}/>
                <Route path="/create" element={<CreateArt/>}/>
        
            </Routes>

            <Footer />
        </>
    );
}

export default App;
