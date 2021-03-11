import { ChakraProvider, CSSReset} from "@chakra-ui/core"
import theme from '../chakra'

function MyApp({ Component, pageProps }) {
  return <ChakraProvider theme={theme}>
    <CSSReset/>
    <Component {...pageProps} />
  </ChakraProvider>
}

export default MyApp
