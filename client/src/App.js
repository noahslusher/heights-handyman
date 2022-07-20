import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './pages/About'
import Contact from './pages/Contact'
import Homepage from './pages/Homepage'
import Header from './components/Header'
import Footer from './components/Footer'
import Services from './pages/Services'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/services" element={<Services />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
