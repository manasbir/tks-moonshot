import Image from 'next/image'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Events from '@/components/calendar/Event'
import CreateEvent from './CreateEvent'


// use axios to fetch data from the backend

export default function Home() {
  // options for data
  // (2023) year -> (01) month -> (01) day -> title, description, startTime, endTime
  // (2023-01-01)day -> title, description, startTime, endTime
  // need to refactor



  const [eventMenu, setEventMenu] = useState(false)
  const [calendarSettings, setCalendarSettings] = useState(new Date())
  const [holoscene, setHoloscene] = useState(false)

  interface Event {
    title: string,
    description: string,
    location: string,
    start_time: string,
    end_time: string,
    color: string,
    organizer: string,
    link: string
  }






  const renderCalendar = () => {
    const date = calendarSettings;
    
    // initial data
    const year = calendarSettings.getFullYear();
    const month = calendarSettings.getMonth();

    // turn into helpers bc date can change
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month + 2, 0).getDate();
    const monthStartsOn = new Date(year, month, 1).getDay();

    let days = [];

    for (let i = 0; i < monthStartsOn; i++) {
      days.push(
        <div className='flex flex-col sm:min-h-28 min-h-[5rem] overflow-auto p-1 border' key={i + "prevMonth"}>
            <div className='flex flex-col w-1/2 h-full text-gray-500'>
              {daysInPrevMonth - monthStartsOn + i + 1}
            </div>
          <div>
            <Events date={new Date(year, month - 1, daysInPrevMonth - monthStartsOn + 1 + i).toISOString().slice(0,10)}/>
          </div>
        </div>
      );
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        <div className='flex flex-col sm:min-h-28 min-h-[5rem] overflow-auto border p-1' key={i}>
            <div className='flex flex-col w-1/2 h-full text-black'>
              {i}
            </div>
          <div>
            <Events date={new Date(year, month, i).toISOString().slice(0,10)}/>
          </div>
        </div>
      );
    }

    let daysLeft = 7 - (days.length % 7);

    for (let i = 1; i <= daysLeft; i++) {
      days.push(
        <div className='flex flex-col min-h-[5rem] overflow-auto p-1 border' key={i + "nextMonth"}>
            <div className='flex flex-col w-1/2 h-full text-gray-400'>
              {i}
            </div>
          <div>
            <Events date={new Date(year, month + 1, i).toISOString().slice(0,10)}/>
          </div>
        </div>
      );
    }

    return (// need days of the week and offset
    <div className='flex flex-col items-center text-md'>
      {eventMenu && <CreateEvent onClose={() => setEventMenu(false)}/>}
      <div className='flex flex-row justify-between w-full'>
        <div className='flex flex-row'>
          <select className='bg-neutral-800 text-white' onChange={(e) => setCalendarSettings(new Date(year, parseInt(e.target.value), 1))} value={calendarSettings.getMonth()}>
            <option value="0">January</option>
            <option value="1">February</option>
            <option value="2">March</option>
            <option value="3">April</option>
            <option value="4">May</option>
            <option value="5">June</option>
            <option value="6">July</option>
            <option value="7">August</option>
            <option value="8">September</option>
            <option value="9">October</option>
            <option value="10">November</option>
            <option value="11">December</option>
          </select>
          <select className='bg-neutral-800 text-white' onChange={(e) => setCalendarSettings(new Date(parseInt(e.target.value), month, 1))} value={calendarSettings.getFullYear()}>
            <option value={"2022"}>{holoscene ? "1" : ""}2022</option>
            <option value={"2023"}>{holoscene ? "1" : ""}2023</option>
            <option value={"2024"}>{holoscene ? "1" : ""}2024</option>
          </select>
        </div>
        <div className='flex flex-row'>
          <button onClick={() => setCalendarSettings(new Date(year, month,0))}>{"<"}</button>
          <button onClick={() => setCalendarSettings(new Date(year, month + 1))}>{">"}</button>
          <button onClick={() => setEventMenu(true)}>+</button>
        </div>
      </div>
      <div className='grid grid-cols-7 row-auto bg-white divide divide-black divide-solid w-full text-xs text-black border-black border items-stretch'>
        {days}
      </div>
      <div className='flex flex-row justify-end w-full'>
        <label className='text-xs text-center'>
        <input className='mr-1 h-2' type="checkbox" onChange={() => setHoloscene(!holoscene)}/>
          holoscene calendar
        </label>
      </div>
    </div>
    )
  }

  const handleEventMenu = () => {
    if (eventMenu) {
      return (
        <div className='flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50 absolute'>
          <div className='flex flex-col items-center w-1/4 min-w-fit bg-white text-black text-sm gap-2 p-2'>
            <div className='flex flex-row justify-end w-full'>
              <button onClick={() => setEventMenu(false)}>X</button>
            </div>
            <form onSubmit={() => setEventMenu(false)} className='flex flex-col items-center w-2/3 gap-1 '>
              <div className='w-full'>
              <label className='w-full'>Event*</label>
              <input className='w-full border' type='text' placeholder='event name'/>
              </div>

              <div className='w-full'>
              <label className='w-full flex felx-col'>Start Date*</label>
              <input className='w-full border' type="datetime-local" placeholder='start date'/>
              </div>

              <div className='w-full'>
              <label className='w-full'>End Date*</label>
              <input className='w-full border' type="datetime-local" placeholder='end date'/>
              </div>

              <div className='w-full'>
              <label className='w-full'>Location*</label>
              <input className='w-full border' type='' placeholder='436 W Pender St, Vancouver, BC V6B 1T5'/>
              </div>

              <div className='w-full'>
              <label className='w-full'>Event Description*
                <textarea className='w-full border' placeholder='description'/>
              </label>
              </div>

              <div className='w-full'>
              <label className='w-full'>Color</label>
              <input className='w-full border' type="color" placeholder='color (optional)'/>
              </div>

              <button className='border mt-1'>Add</button>
            </form>
          </div>
        </div>
      )
    }
  }

 

  return (
      <div className='flex flex-col max-w-[40rem] min-w-[24rem] w-7/12 p-3'>
          {renderCalendar()}
      </div>
  )
}

