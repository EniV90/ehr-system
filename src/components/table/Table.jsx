import { amber } from '@mui/material/colors'
import React from 'react'
import './table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
    const rows = [
        {
          id: 114155,
          img:'',
          name: 'Motolani Akingbade',
          time: '9 AM',
          duration: '1 hour 30 minutes',
          date: '19 March',
          status: 'Approved',
            
        },
         {
           id: 116794,
           img:'',
           name: 'Eformeh Wisdom',
           time: '11 AM',
           duration: '1 hour',
           date: '19 March',
           status: 'Approved',
            
        },
          {
            id: 111098,
            img:'',
            name: 'Dolapo Shabi',
            time: '12:30 PM',
            duration: '1 hour 15 minutes',
            date: '19 March',
            status: 'Pending',
            
        },
           {
             id: 110367,
             img:'',
             name: 'Taofeek Durojaiye',
             time: '2:15PM',
             duration: '45 minutes',
             date: '19 March',
             status: 'Approved',
            
        },
          {
            id: 117940,
            img:'',
            name: 'Titiloye Michael',
            time: '4:30 PM',
            duration: '30 minutes',
            date: '19 March',
            status: 'Pending',
            
        },
          {
            id: 117839,
            img:'',
            name: 'Ajao Semiloore',
            time: '5:15 PM',
            duration: '1 hour',
            date: '19 March',
            status: 'Pending',
            
        },
    ]
     return (
    <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Patient ID</TableCell>
            <TableCell className='tableCell'>Patient Image</TableCell>
            <TableCell className='tableCell'>Patient Name</TableCell>
            <TableCell className='tableCell'>Scheduled Time</TableCell>
            <TableCell className='tableCell'>Scheduled Duration</TableCell>
            <TableCell className='tableCell'>Scheduled Date</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell className='tableCell'>{row.id}</TableCell>
              <TableCell className='tableCell'>
                <div className="cellName">
                  <img src={row.img} alt="" className='image'/>
                </div>
              </TableCell>
              <TableCell className='tableCell'>{row.name}</TableCell>
              <TableCell className='tableCell'>{row.time}</TableCell>
              <TableCell className='tableCell'>{row.duration}</TableCell>
              <TableCell className='tableCell'>{row.date}</TableCell>
              <TableCell className='tableCell'>
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
  
}

export default List