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

  

  const dummyData = [ ...props.events,
    {
      title: 'null',
      description: 'New Year',
      location: 'Global',
      start: '2000-04-05 00:00:00',
      end: '2000-04-05 00:00:00',
      organizer: "null",
      link: "",
      frequency: "null",
    },
    {
      title: 'New Year',
      description: 'New Year',
      location: 'Global',
      start: '2023-01-01 00:00:00',
      end: '2023-01-01 10:00:00',
      organizer: "null",
      link: "",
      frequency: "null",
    },
    {
      title: 'Gym',
      description: 'Test Desctriptuon 1 aslkdjaslkdjaslkdj laskd jaslkdj enjoy! Test Desctriptuon 1 aslkdjaslkdjaslkdj laskd jaslkdj enjoy!Test Desctriptuon 1 aslkdjaslkdjaslkdj laskd jaslkdj enjoy!',
      location: '436 W Pender Vancouver BC V6B 1T5',
      start: '2023-04-05 00:00:00',
      end: '2023-01-05 10:00:00',
      link: 'https://calendar.google.com/calendar/u/0/r/eventedit/copy/MjAyMzA0MDZfNm5sdW43MWVvbWpybmxoNTZyNmZ0NWE2dTggZW4uY2FuYWRpYW4jaG9saWRheUB2',
      organizer: "Test Maker",
      frequency: "WEEKLY",
    },
    {
      title: 'School',
      description: 'Test Desctriptuon 1 aslkdjaslkdjaslkdj laskd jaslkdj enjoy!',
      location: 'Test Location St',
      start: '2023-04-05 00:00:00',
      end: '2023-01-05 10:00:00',
      link: 'https://calendar.google.com/calendar/u/0/r/eventedit/copy/MjAyMzA0MDZfNm5sdW43MWVvbWpybmxoNTZyNmZ0NWE2dTggZW4uY2FuYWRpYW4jaG9saWRheUB2',
      organizer: "Test Maker",
      frequency: "WEEKLY",
    },
    {
      title: 'Work & Study',
      description: 'Test Desctriptuon 1 aslkdjaslkdjaslkdj laskd jaslkdj enjoy!',
      location: 'Test Location St',
      start: '2023-04-05 00:00:00',
      end: '2023-01-05 10:00:00',
      link: 'https://calendar.google.com/calendar/u/0/r/eventedit/copy/MjAyMzA0MDZfNm5sdW43MWVvbWpybmxoNTZyNmZ0NWE2dTggZW4uY2FuYWRpYW4jaG9saWRheUB2',
      organizer: "Test Maker",
      frequency: "WEEKLY",
    },
    {
      title: 'TKS',
      description: 'Test Desctriptuon 1 aslkdjaslkdjaslkdj laskd jaslkdj enjoy!',
      location: 'Test Location St',
      start: '2023-04-01 00:00:00',
      end: '2023-01-05 10:00:00',
      link: 'https://calendar.google.com/calendar/u/0/r/eventedit/copy/MjAyMzA0MDZfNm5sdW43MWVvbWpybmxoNTZyNmZ0NWE2dTggZW4uY2FuYWRpYW4jaG9saWRheUB2',
      organizer: "Test Maker",
      frequency: "",
    },
    {
      title: 'Meeting',
      description: 'Test Desctriptuon 1 aslkdjaslkdjaslkdj laskd jaslkdj enjoy!',
      location: 'Test Location St',
      start: '2023-04-05 00:00:00',
      end: '2023-01-05 10:00:00',
      link: 'https://calendar.google.com/calendar/u/0/r/eventedit/copy/MjAyMzA0MDZfNm5sdW43MWVvbWpybmxoNTZyNmZ0NWE2dTggZW4uY2FuYWRpYW4jaG9saWRheUB2',
      organizer: "Test Maker",
      frequency: "",
    },
    // Add more events here as needed
  ].sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());

  const [popup, setPopup] = useState<CalendarEvent>(dummyData[0] as CalendarEvent);

    // fetch data from backend
    // dummy data for now
    const events = dummyData.filter((event) => {
      // Extract the date part from the event start time
      // 
      const eventDate = event.start.slice(0,10);
      // Compare the event date with the target date
      const targetDate = new Date(props.date).toISOString().slice(0,10);
      return eventDate == targetDate;
    });

    const handleClick = (event: CalendarEvent) => {
      (popup as CalendarEvent).title == event.title ? setPopup(dummyData[0] as unknown as CalendarEvent) :  setPopup(event as CalendarEvent);
      // console.log(popup);
    }

    const handleClose = () => {
      setPopup(dummyData[0] as unknown as CalendarEvent);
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