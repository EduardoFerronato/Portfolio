import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import "./style.css"

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("chakra-ui-color-mode", "dark")
  }, [])

  return (
    <ChakraProvider theme={extendTheme({config:{useColorMode: "dark"}})}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
