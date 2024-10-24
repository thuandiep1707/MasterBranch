import React, { useEffect, useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import enUS from 'date-fns/locale/en-US';
import CustomToolbar from './components/customs/CustomToolbar';
import AddEvent from './components/modals/AddEvent';
import './app.scss'
import ListEvent from './components/asides/ListEvent';
import DetailEvent from './components/asides/DetailEvent';
const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 0 }),
  getDay,
  locales,
});

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [modalAddEvent, setModalAddEvent] = useState(false)
  const [adsideRender, setAsideRender] = useState('list')
  const [eventInTheDate, setEventInTheDate] = useState([])
  const [eventSelected, setEventSelected] = useState({})
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'First Session with Alex Stan',
      start: new Date(2024, 9, 24, 10, 0),
      end: new Date(2024, 9, 24, 11, 0),
      location: 'Online',
      about: '',
      typeEvent: 'Event',
      clientAvatar: 'https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg',
      clientId: '0x89122dxdiag'
    },
    {
      id: 2,
      title: 'How to cope with trauma in professional life',
      start: new Date(2024, 9, 24, 14, 0),
      end: new Date(2024, 9, 24, 15, 30),
      location: 'Ho Chi Minh, Vietnam',
      about: '',
      typeEvent: 'Appointment',
    },
    {
      id: 3,
      title: 'Chemistry Session with Mr. Lee',
      start: new Date(2024, 9, 24, 18, 0),
      end: new Date(2024, 9, 24, 19, 30),
      location: 'Online',
      about: '',
      typeEvent: 'Event',
      clientAvatar: 'https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg',
      clientId: '0x89122dxdiag'
    }
  ]);
  useEffect(() => {
    const filteredEvents = events.filter(event => (
      event.start.toDateString() === selectedDate.toDateString()
    ))
    setEventInTheDate(filteredEvents)
  },[selectedDate, events.length])
  const handleDateClick = (date) => {
    setSelectedDate(date);
  };
  const handleAddEvent = (data) =>{
    setEvents(prev => [...prev, {...data, id: prev.length}])
  }
  const CustomDateHeader = ({label, date}) => {
    const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
    return (
        <p
          style={{
            backgroundColor: isSelected ? '#0F4C81' : '',
            color: isSelected ? 'white' : '',
            margin: '5px',
            borderRadius: '50%',
            padding: '5px 8px',
            cursor: 'pointer',
          }}
          onClick={() => {handleDateClick(date); setAsideRender('list')}}
        >
          {label}
        </p>
    );
  };
  return (
    <div className="app">
      <div className="calendar-around">
        <Calendar
          className='calendar'
          defaultView='month'
          onSelectEvent={(event) => {setEventSelected(event); setAsideRender('detail')}}
          AddEvent={() => setModalAddEvent(true)}
          localizer={localizer}
          events={events}
          formats={{weekdayFormat: (date) => date.toLocaleDateString('en-US', { weekday: 'short' })}}
          components={{
            toolbar: CustomToolbar,
            month:{
              dateHeader: CustomDateHeader
            }
          }}
        />
      </div>
      {
        adsideRender === 'list' 
        ?
        <ListEvent
          eventList={eventInTheDate}
          selectedDate={selectedDate}
          setModalAddEvent={setModalAddEvent} 
          setEventSelected={setEventSelected} 
          setAsideRender={setAsideRender}/>
        :
        adsideRender === 'detail' 
        ?
        <DetailEvent
          eventSelected={eventSelected}/>
        :
        null
      }
      {modalAddEvent && <AddEvent date={selectedDate} handleAddEvent={handleAddEvent} setModalAddEvent={setModalAddEvent} />}
    </div>
  );
};

export default App;