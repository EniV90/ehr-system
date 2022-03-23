import React from 'react'
import './widget.scss'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EventNoteIcon from '@mui/icons-material/EventNote';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
const Widget = ({ type }) => {
  
  let data;
  
  switch (type) {
    case 'patients':
      data = {
        title: 'PATIENTS',
        number: '100',
        isDone: false,
        link: 'See all users',
        icon: (
          <PersonOutlineIcon
            className='icon'
            style=
            {{
              color: 'darkblue',
              backgroundColor: 'lightblue',
            }}
          />
        ) 
        
      }
      break;
     case 'Appointments':
      data = {
        title: 'APPOINTMENTS',
        number: '6',
        isDone: false,
        link: 'View all appointments',
        icon: (
          <EventNoteIcon
            className='icon'
            style={{
              color: 'goldenrod',
              backgroundColor: 'rgba(218, 165, 32, 0.2)',
            }}
          />)
        
      }
      break;
     case 'Appointments Done':
      data = {
        title: 'APPOINTMENT DONE',
        number: '3',
        isDone: false,
        link: 'View all completed appointments',
        icon: (
          <EventAvailableIcon
            className='icon'
            style={{
              color: 'crimson',
              backgroundColor: 'rgba(255, 0, 0, 0.2)'
            }}
          />)
        
      }
      break;
    default:
      break;
    }
  return (
      <div className='widget'>
          <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.number}</span>
        <span className="link">{data.link}</span>
          </div>
      <div className="right">
        {data.icon}
      </div>
    </div>
  )
}

export default Widget