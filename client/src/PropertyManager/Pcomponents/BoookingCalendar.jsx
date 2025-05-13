// BookingCalendar.js
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { parse, startOfWeek, getDay, format } from 'date-fns';
import { useEffect, useState } from 'react';
import { enUS } from 'date-fns/locale';

const locales = {
    'en-US': enUS,
  };
const localizer = dateFnsLocalizer({ format, parse, startOfWeek, getDay ,locales});

const generateRandomBookings = () => {
  const roomTypes = ['Deluxe Suite', 'Standard Room', 'Executive Suite', 'Family Room', 'Presidential Suite'];
  const guestNames = ['John Smith', 'Emma Johnson', 'Michael Brown', 'Sarah Davis', 'David Wilson', 'Lisa Miller'];
  const statuses = ['confirmed', 'checked-in', 'checked-out', 'cancelled'];
  
  const bookings = [];
  const today = new Date();
  
  for (let i = 0; i < 20; i++) {
    const startDate = new Date(today);
    startDate.setDate(startDate.getDate() + Math.floor(Math.random() * 60));
    
    const duration = Math.max(1, Math.floor(Math.random() * 7));
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + duration);
    const roomType = roomTypes[Math.floor(Math.random() * roomTypes.length)];
    const guestName = guestNames[Math.floor(Math.random() * guestNames.length)];
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    
    bookings.push({
      id: `booking-${i}`,
      title: `${roomType} - ${guestName}`,
      start: startDate,
      end: endDate,
      allDay: true,
      roomType,
      guestName,
      status,
    });
  }
  
  return bookings;
};

export default function BookingCalendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const randomBookings = generateRandomBookings();
    setEvents(randomBookings);
  }, []);
  const eventStyleGetter = (event) => {
    let backgroundColor = '#3174ad'; 
    
    switch(event.status) {
      case 'confirmed':
        backgroundColor = '#4CAF50'; 
        break;
      case 'checked-in':
        backgroundColor = '#2196F3'; 
        break;
      case 'checked-out':
        backgroundColor = '#9C27B0'; 
        break;
      case 'cancelled':
        backgroundColor = '#F44336';
        break;
    }
    
    return {
      style: {
        backgroundColor,
        borderRadius: '4px',
        opacity: 0.8,
        color: 'white',
        border: '0px',
      }
    };
  };

  return (
    <div style={{ height: '100vh', padding: '50px' }}>
      <h2>Hotel Booking Calendar</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        eventPropGetter={eventStyleGetter}
        onSelectEvent={(event) => alert(
          `Booking Details:\n
          Guest: ${event.guestName}\n
          Room: ${event.roomType}\n
          Status: ${event.status}\n
          Dates: ${format(event.start, 'MMM dd')} - ${format(event.end, 'MMM dd')}`
        )}
        defaultView="month"
        views={['month', 'week', 'day', 'agenda']}
      />
    </div>
  );
}