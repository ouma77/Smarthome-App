import React from 'react';
import { Card } from 'antd';
import './App.css';
import param from './images/param.png';
import chooseRoom from './images/chooseRoom.jpg';

const Home = () => (
  <div className="App">

      <div className="crd crd1">
          <Card title="Rooms" bordered={true} style={{ width: 300 }}>
              <img className="img" src={chooseRoom}></img>
          </Card>
      </div>
    
      <div className="crd crd2">
          <Card title="Setting" bordered={true} style={{ width: 300 }}>
              <img className="img" src={param}></img>
          </Card>
      </div>

  </div>
);

export default Home;
