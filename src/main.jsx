import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Error from './components/Error'
import Accommodation from './pages/Accomodation/Accomodation.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accommodation/:id" element={<Accommodation />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
