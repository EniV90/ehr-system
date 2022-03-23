import React from 'react'
import './single.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Result from '../../components/result/Result'
import Bottom from '../../components/bottom/Bottom'

const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Motolani Akingbade</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">MotolA@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+234 81 6709 3409</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address</span>
                  <span className="itemValue">123, Damilole Estate, Ibadan</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Gender:</span>
                  <span className="itemValue">Male</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Blood Type:</span>
                  <span className="itemValue">O+(Positive)</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Allergies:</span>
                  <span className="itemValue">Penicilin</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Diseases:</span>
                  <span className="itemValue">Diabetes</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Height:</span>
                  <span className="itemValue">1.78m</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Weight:</span>
                  <span className="itemValue">65kg</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Patient ID:</span>
                  <span className="itemValue">114155</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Last Visit:</span>
                  <span className="itemValue">21st January 2022</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Result />
          </div>
        </div>
        <div className="bottom">
          {/* <Bottom /> */}
        </div>
      </div>
    </div>
  )
}

export default Single