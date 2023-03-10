import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider } from 'styled-components';

function App() {
  const theme = {
    colors: {
      APC: '#64CCFF',
      LP: '#0AA83F',
      PDP: '#D62B3C'
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Hero />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
