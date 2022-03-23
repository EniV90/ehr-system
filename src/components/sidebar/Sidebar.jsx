import React, { useContext } from 'react'
import './sidebar.scss'
import Dashboard from '@mui/icons-material/Dashboard'; import GroupIcon from '@mui/icons-material/Group';
import ScheduleIcon from '@mui/icons-material/Schedule';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import SettingsIcon from '@mui/icons-material/Settings';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import { Link } from 'react-router-dom'
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext)
  return (
      <div className='sidebar'>
          <div className='top'>
              <Link to='/' style={{textDecoration:'none'}}>
                  <span className="logo">E-health</span>
              </Link>
              
          </div>
          <hr />
          <div className='center'>
              <ul>
                  <p className="title">MAIN</p>
                  <Link to='/' style={{textDecoration:'none'}}>
                  <li>
                      <Dashboard className='icon' />
                      <span>Dashboard</span>
                      </li>
                      </Link>
                  <p className="title">LISTS</p>
                  <Link to='/users' style={{textDecoration:'none'}}>
                    <li>
                      <GroupIcon className='icon' />
                      <span>Patients</span>
                    </li>
                  </Link>
                  <li>
                      <ScheduleIcon className='icon' />
                      <span>Appointments</span>
                  </li>
                  <li>
                      <LocalPostOfficeIcon className='icon' />
                      <span>Messages</span>
                  </li>
                  <br />
                  <p className="title">USEFUL</p>
                  <li>
                      <InsertChartIcon className='icon' />
                      <span>Lab Reports</span>
                  </li>
                  <li>
                      <NotificationsActiveIcon className='icon' />
                      <span>Notifications</span>
                  </li>
                  <p className="title">SERVICE</p> 
                  <li>
                      < HealthAndSafetyIcon className='icon' />
                      <span>System Health</span>
                  </li>
                  <li>
                      <AccessTimeFilledIcon className='icon' />
                      <span>Logs</span>
                  </li>
                  <li>
                      <SettingsIcon className='icon' />
                      <span>Settings</span>
                  </li>
                   <p className="title">USERS</p>
                  <li>
                      <PersonOutlineIcon className='icon' />
                      <span>Profile</span>
                  </li>
                  <li>
                      <LogoutIcon className='icon' />
                      <span>Log Out</span>
                  </li>
                  {/* <p className="title">THEME</p> */}
                </ul>
          </div>
          {/* <div className='bottom'>
              <div
                  className="colorOption"
                  onClick={() => dispatch({ type: 'LIGHT' })}>
              </div>
              <div
                  className="colorOption"
                  onClick={() => dispatch({ type: 'DARK' })}>
              </div>
          </div> */}
    </div>
  )
}

export default Sidebar