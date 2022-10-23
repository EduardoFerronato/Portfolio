import { ChakraProvider} from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import theme from '../src/config/chakra/theme'

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("chakra-ui-color-mode", "dark")
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
