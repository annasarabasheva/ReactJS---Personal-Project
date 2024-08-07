import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import About from './components/about/About';
import Gallery from './components/gallery/Gallery';
import ArtCreate from './components/art-create/ArtCreate';
import Register from './components/register/Register';
import Login from './components/login/Login';
import ArtDetails from './components/art-details/ArtDetails';
import Logout from './components/logout/Logout';
import ArtEdit from './components/art-edit/ArtEdit';
import Profile from './components/profile/Profile';
import Search from './components/search/Search';
import Page404 from './components/page-404/Page404';

import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext';

import AuthGuard from './guards/AuthGuard';
import GuestGuard from './guards/GuestGuard';

import ErrorBoundary from './components/ErrorBoundry';


function App() {
    return (
        <ErrorBoundary>
            <AuthProvider>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/search" element={<Search />} />

                    <Route path="/gallery/:artID/details" element={<ArtDetails />} />

                     {/* Logged in users shouldnt be able to access register or login */}
                    <Route element={<GuestGuard />}>
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                    </Route>
                
                    {/* Routes that require authentication */}
                    <Route element={<AuthGuard />}>
                        <Route path="/create" element={<ArtCreate />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/gallery/:artID/edit" element={<ArtEdit />} />
                        <Route path="/logout" element={<Logout />} />
                    </Route>

                    {/* 404 Route */}
                    <Route path="*" element={<Page404 />} />

                </Routes>
                <Footer />
            </AuthProvider>
        </ErrorBoundary>
    );
}

export default App;
