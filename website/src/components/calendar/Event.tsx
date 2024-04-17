import { useEffect, useRef, useState } from "react";
import EventPopup from "./EventPopup";


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
interface EventsProps {
    date: string;
    events: Event[];
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

export default function Events(props: EventsProps) {
  const [events, setEvents] = useState<Event[]>([]);


  useEffect(() => {
    setEvents(events.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()));
    setEvents(events.filter((event) => {
      // Extract the date part from the event start time
      // 
      const eventDate = event.start.slice(0,10);
      // Compare the event date with the target date
      const targetDate = new Date(props.date).toISOString().slice(0,10);
      return eventDate == targetDate;
    }))
  },[props.events])

  const [popup, setPopup] = useState<CalendarEvent>(props.events[0] as CalendarEvent);

    // fetch data from backend
    // dummy data for now
    

    const handleClick = (event: CalendarEvent) => {
      (popup as CalendarEvent).title == event.title ? setPopup(props.events[0] as unknown as CalendarEvent) :  setPopup(event as CalendarEvent);
      // console.log(popup);
    }

    const handleClose = () => {
      setPopup(props.events[0] as unknown as CalendarEvent);
    }

    const refArray = useRef<HTMLDivElement[]>([]);




    return(
      <div className="flex flex-col gap-1 mt-1">
        {events.map((event) => {
          return(
            <div 
              ref={(element => refArray.current.push(element!))}
              onClick={() => handleClick(event as CalendarEvent)} className={`flex flex-col justify-center text-white bg-blue-700 p-0.5 text-xs rounded-sm text-ellipsis w-full cursor-pointer`} key={event.title}>
              {event.title}
              {(popup as CalendarEvent).title == (event as CalendarEvent).title ? <EventPopup event={event} onClose={() => handleClose()}/>: <></>}
            </div>
          )})}
          
      </div>
    )

}