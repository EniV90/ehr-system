import React from 'react'
import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Table from '../../components/table/Table'
import Widget from '../../components/widget/Widget'
import "./home.scss"
const Home = () => {
  return (
      <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type='patients' />
          <Widget type='Appointments' />
          <Widget type='Appointments Done' />
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
        <div className="listContainer">
          <div className="listTitle">Today's Appointments</div>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Home