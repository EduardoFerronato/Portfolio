import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import "./style.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={extendTheme({config:{useColorMode: "dark"}})}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
