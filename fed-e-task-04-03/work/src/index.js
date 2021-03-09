import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Box, ChakraProvider, CSSReset } from '@chakra-ui/react'
 import theme from '@chakra-ui/theme'

ReactDOM.render(
   <ChakraProvider theme={theme}>
     <CSSReset></CSSReset>
      <Box h="1000px" bgColor='#f1f1f1'>
       <App />
      </Box>
   </ChakraProvider>,
  document.getElementById('root')
);

