import Image from 'next/image'
import { Inter } from 'next/font/google'
import logo from "../../public/vercel.svg";
import bg from "../../public/background.svg"
import Header from '@/components/Header';
import Welcome from '@/components/Welcome';
import Information from '@/components/Information';
import Head from 'next/head';
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <>
    <Head>
      <title>unai</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preload" href="/fonts/Inter-roman.var.woff2?v=3.19" as="font" type="font/woff2" crossOrigin="anonymous" />
      
    </Head>
    <main className={`selection:bg-opacity-80 selection:bg-pink-500 selection:text-white flex min-h-screen flex-col items-center ${inter.className}`}>
      <Header/>
      <Welcome/>
      <Information/>
    </main>
    </>

    
  )

  
}