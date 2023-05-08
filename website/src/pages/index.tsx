import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Anybody } from 'next/font/google';
import logo from "../../public/vercel.svg";
import bg from "../../public/background.svg"
import Header from '@/components/Header';
import Welcome from '@/components/Welcome';
import Information from '@/components/Information';
import Head from 'next/head';
const inter = Inter({ subsets: ['latin'] })
const anybody = Anybody({ subsets: ['latin'] })


export default function Home() {
  return (
    <>
    <Head>
      <title>unai</title>
      <link rel="icon" href="/favicon.ico" />      
    </Head>
    <main className={`selection:bg-opacity-80 selection:bg-pink-500 selection:text-white flex min-h-screen flex-col items-center ${anybody.className}`}>
      <Header/>
      <Welcome/>
      <Information/>
    </main>
    <footer className="flex flex-col items-center justify-center w-full h-full p-10">
      © 2023 UMAI
    </footer>
    </>
  )
}