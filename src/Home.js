import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from 'antd';
import './App.css';
import param from './images/param.png';
import chooseRoom from './images/chooseRoom.jpg';

class Home extends Component{
    render(){
      return(
        <div className="App">
            <div className="crd crd1">
              <NavLink to="/Rooms">
                <Card title="Rooms" bordered={true} style={{ width: 300 }}>
                    <img className="img" src={chooseRoom}></img>
                </Card>
              </NavLink>
            </div>
    
            <div className="crd crd2">
              <NavLink to="/Setting">
                <Card title="Setting" bordered={true} style={{ width: 300 }}>
                    <img className="img" src={param}></img>
                </Card>
              </NavLink>
            </div>
        </div>
      );
    }
  }
  

export default Home;
