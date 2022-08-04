import logo from './logo.svg';
import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Container, Stack } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import Amplify from 'aws-amplify'
import {API} from 'aws-amplify'


import About from './pages/About'
import ContactForm from './pages/Contact'
import Homepage from './pages/Homepage'
import Header from './components/Header'
import Footer from './components/Footer'
import Services from './pages/Services'

function App() {
  return (
    <ChakraProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<ContactForm />}></Route>
        <Route path="/services" element={<Services />}></Route>
      </Routes>
      <Footer />
    </Router>
    </ChakraProvider>
  );
}

export default App;
