import React from 'react'
import './featured.scss'
import MoreVerIcon from '@mui/icons-material/MoreVert'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';

const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title">Total Patients</h1>
        <MoreVerIcon fontSize='small'/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Total completed appointments today</p>
        <p className="amount">60</p>
        <p className="desc">Total average of patients per month</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize='small'/>
              <div className="resultAmount">15.4%</div>
            </div>
          </div>
           <div className="item">
            <div className="itemTitle">This Week</div>
            <div className="itemResult negative">
              <KeyboardArrowDownOutlinedIcon fontSize='small'/>
              <div className="resultAmount">12.2%</div>
            </div>
          </div>
           <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize='small'/>
              <div className="resultAmount">20.5%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured