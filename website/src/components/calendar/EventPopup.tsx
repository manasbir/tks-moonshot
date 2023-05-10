import { GoogleCalendar } from 'datebook';
import Image from 'next/image';
import location from 'public/favicon.ico';
import { useEffect, useRef } from 'react';

interface EventPopupProps {
  event: CalendarEvent;
  onClose: () => void;
}

interface CalendarEvent {
  title: string;
  start: string;
  end: string;
  description: string;
  location: string;
  link: string;
  frequency: string;
}



export default function EventPopup(props: EventPopupProps) {
  const ref = useRef<HTMLDivElement>(null);

  const options = { 
    title: props.event.title,
    description: props.event.description,
    location: props.event.location,
    start: new Date(props.event.start),
    end: new Date(props.event.end),
    reoccurence: {
      frequency: props.event.frequency,
      interval: 1,
    }
  };

  const googleCalendar = new GoogleCalendar(options)




  return (
    <div className="p-3 absolute bg-white text-black -translate-x-full max-w-[30ch]" ref={ref}>
      <h2 className='text-sm mb-1'><b>{props.event.title}</b></h2>
      <p>{props.event.description}</p>
      <a className='flex flex-row items-center' href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(props.event.location)}`} target='_blank'>
        <Image className='w-5 h-5 mr-1' src={location} alt="location"/>
        <p className='text-xs mt-1'>{props.event.location}</p>
      </a>
      <div className="flex flex-col">
        <a className="flex flex-row border rounded-sm p-1 text-center mt-1" href={googleCalendar.render()} target='_blank'>
          <p className='w-full'>Add to Google Calendar</p>
        </a>
      </div>
    </div>
  )
}
