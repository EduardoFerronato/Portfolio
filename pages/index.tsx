import type { NextPage } from 'next'
import Head from 'next/head'
import { HomePage } from '../src/components/HomePage'

const Home: NextPage = () => {
  return (
    <>
      <Head><title>Eduardo Ferronato</title></Head>
      <HomePage />
    </>
  )
}

export default Home
