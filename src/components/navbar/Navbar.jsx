import React, { useContext } from 'react'
import './navbar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { DarkModeContext } from '../../context/darkModeContext';

const Navbar = () => {

  const { dispatch } = useContext(DarkModeContext)

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          {/* <div className="item">
            <LanguageOutlinedIcon  className='icon'/>
            English
          </div> */}
          <div className="item">
            <DarkModeOutlinedIcon className='icon' onClick={() => dispatch({ type: 'TOGGLE'}) }/>
          </div>
          <div className="item">
            <FullscreenExitIcon className='icon'/>
          </div>
          <div className="item">
            <NotificationsNoneIcon className='icon' />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineIcon className='icon' />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <FormatListBulletedIcon className='icon'/>
          </div>
          <div className="item">
            <img src="data:image/jpeg;base64,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"
               alt=""
              className='avatar'
      
            />
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar