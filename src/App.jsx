import { BrowserRouter, Routes, Route } from "react-router";
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Accommodation from './pages/Accommodation/Accommodation.jsx';
import Error from './pages/Error/Error.jsx';
import './App.scss'

function App() {

  return (

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

  )
}

export default App
