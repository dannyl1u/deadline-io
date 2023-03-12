import React from 'react';
import Calendar from 'react-calendar';

function CalendarData({events}) {

  const eventTiles = events.events.map(event => (
    <div key={event.id}>
      <p>{event.title}</p>
      <p>{event.date}</p>
    </div>
  ));

  return (
    <div>
      <Calendar value={events.date} />
      {eventTiles}
    </div>
  );
}

export default CalendarData;