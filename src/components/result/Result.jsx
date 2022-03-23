import React from 'react'
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import ScaleIcon from '@mui/icons-material/Scale';
import './result.scss'
const Result = () => {
  return (
      <div className='result'>
          <div className="top">
              <h1 className="title">Test Reports</h1>
              <div className="summary">
          <div className="item">
            <div className="itemTitle">Heart rate</div>
            <div className="itemResult positive">
              <MonitorHeartIcon fontSize='small'/>
              <div className="resultAmount">80bpm</div>
            </div>
          </div>
           <div className="item">
            <div className="itemTitle">Body Temperature</div>
            <div className="itemResult negative">
              <ThermostatIcon  fontSize='small'/>
              <div className="resultAmount">35.6</div>
            </div>
          </div>
           <div className="item">
            <div className="itemTitle">Glucose</div>
            <div className="itemResult positive">
              <ScaleIcon fontSize='small'/>
              <div className="resultAmount">100mg/dl</div>
            </div>
          </div>
        </div>
          </div>
          <div className="bottom">
              <div className="report">
                  <div className="items">
                      <div className="itemsName">CT Scan -Full Body</div>
                      <div className="itemsResult">

                      </div>
                      <div className="itemsCheck"> 21st January 2022</div>
                  </div>
                   <div className="items">
                      <div className="itemsName">Creatine Kinase T</div>
                      <div className="itemsResult">

                      </div>
                      <div className="itemsCheck"> 21st January 2022</div>
                  </div>
                   <div className="items">
                      <div className="itemsName">Eye Fluoresine Test</div>
                      <div className="itemsResult">

                      </div>
                      <div className="itemsCheck"> 21st January 2022</div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Result