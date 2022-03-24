import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Skills from '../components/Skills'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Nadir [Protfolio]</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Header/>

    <hr className=""/>
    <h1 className='mt-4 font-semibold'>What I Can Do For You ?</h1>
    <Skills/>
    </div>
  )
}

export default Home
