// Instalar react-router-dom 

import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'

import Home from './pages/Home'
import Filme from './pages/Filme'
import Header from './components/Header';
import Erro from './pages/Erro';
import Favoritos from './pages/Favoritos';

function Layout() {
    const location = useLocation()

    return (
        <>
            {location.pathname !== "/404" && < Header />}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/filme/:id" element={<Filme />} />
                <Route path='/favoritos' element={<Favoritos />} />

                <Route path='/404' element={< Erro />} />

                <Route path="*" element={<Navigate to='/404' />} />
            </Routes>
        </>
    )
}


function RoutesApp() {

    return (
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    )
}

export default RoutesApp;