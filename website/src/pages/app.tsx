import { Anybody } from 'next/font/google';
import Head from 'next/head';
import Calendar from '@/components/calendar/Calendar';
import { useState } from 'react';
import Chat from '@/components/Chat';
const anybody = Anybody({ subsets: ['latin'] })

interface Event {
  title: string,
  description: string,
  location: string,
  start: string,
  end: string,
  organizer: string,
  link: string,
  frequency: string
}

export default function Home() {
    const [schedule, setSchedule] = useState<Event[]>([])
    const handleNewEvents = (events: Event[]) => {
      setSchedule(events)
    }

  return (
    <>
      <Head>
        <title>unai app</title>
        <link rel="icon" href="/favicon.ico" />      
      </Head>
      <main className={`selection:bg-opacity-80 selection:bg-pink-500 selection:text-white flex min-h-screen flex-row justify-evenly ${anybody.className} w-full bg-neutral-700`}>
          <Chat newEvents={handleNewEvents}/>
          <Calendar events={schedule}/>   
      </main>
      <footer className="flex flex-col items-center justify-center w-full h-full p-10">
        © 2023 unai
      </footer>
    </>
  )
}