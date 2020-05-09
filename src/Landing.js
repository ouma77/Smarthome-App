import React from 'react';
import { Button } from 'antd';
import './App.css';
import Smarthome from './images/home.png';

const Landing = () => (
  <div className="App">
    <div className='welcome'>
      <h1>Welcome to <span className="smarthome">Smarthome</span></h1>
      <p>Let's manage your smart home</p>
    </div>
    <div className="smartH_img">
      <img className='img' src={Smarthome}></img>
    </div>

    <div className='btnStart'>
         <a><Button type="primary">Get Started</Button></a>
    </div>
  </div>
);

export default Landing;
