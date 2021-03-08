import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
 import theme from '@chakra-ui/theme'

ReactDOM.render(
   <ChakraProvider theme={theme}>
     <CSSReset></CSSReset>
      <App />
   </ChakraProvider>,
  document.getElementById('root')
);

