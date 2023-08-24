import React from 'react'
import './Home.css'
import img from '../../assets/smart-house.png'
export default function Home() {
  return (
    <>
<div className='home-page '>
  <nav className='d-lg-block d-none'>
    <ul>
      <li className="logo"><img src={img} className='w-100  p-1' alt /></li>
      <li><a href="#"><i className="fa fa-home" /> &nbsp; Home</a></li>
      <li><a href="#"><i className="fa fa-book" /> &nbsp; readings</a></li>
      <li><a href="#"><i className="fa fas fa-image" /> &nbsp; Realtime table</a></li>
      <li><a href="#"><i className="fa fa-users" /> &nbsp; team</a></li>
      <li><a href="#"><i className="fa fa-phone" /> &nbsp; contact</a></li>
    </ul>
  </nav>
  <div className=" wrapper d-flex align-content-center justify-content-center">
    <div className="section">
      {/* <div class="box-area"> </div>*/}
      <div className="data-head col-md-12 w-100">Sensors Realtime Readings</div>
      <div className="data-container col-md-12 w-100">
        <div className="data-item ">
          <h2>Rain Sensor</h2>
          <p className="value">22 ℃</p>
        </div>
        <div className="data-item">
          <h2>Gas Sensor</h2>
          <p className="value">10%</p>
        </div>
      </div> 
      <div className="data-container col-md-12 w-100">
        <div className="data-item">
          <h2>IR Sensor</h2>
          <p className="value" id="irsensor">22 </p>
        </div>
        <div className="data-item">
          <h2>Voltage</h2>
          <p className="value" id="voltage">67</p>
        </div>
      </div> 
    </div>
  </div>
</div>

        
    </>
  )
}
