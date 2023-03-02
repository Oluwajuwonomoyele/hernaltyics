import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react';
import chakraTheme from '@chakra-ui/theme'

const { Menu, Button } = chakraTheme.components

const theme = extendBaseTheme({
  styles: {
    global: () => ({
      body: {
        bg: '',
      }
    }),
    components: {
      Menu,
      Button,
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraBaseProvider resetCSS={false} theme={theme}> 
      <App />
    </ChakraBaseProvider>
  </React.StrictMode>
);
