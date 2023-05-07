import Image from 'next/image'
import { Inter } from 'next/font/google'
import logo from "../../public/vercel.svg";
import bg from "../../public/background.svg"
import Header from '@/components/Header';
import Welcome from '@/components/Welcome';
import Information from '@/components/Information';
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <>
    <main className={`selection:bg-opacity-80 selection:bg-pink-500 selection:text-white flex min-h-screen flex-col items-center ${inter.className}`}>
      <Header/>
      <Welcome/>
      <Information/>
    </main>
    </>

    
  )

  
}