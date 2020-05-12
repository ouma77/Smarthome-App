import React, {Component} from 'react';
import { Tabs, Switch, Slider  } from 'antd';
import { StickyContainer} from 'react-sticky';
import Header from './Header.js';
import './App.css';
import LivingroomRoom from './images/LivingroomRoom.png';

const { TabPane } = Tabs;
const marks = {
    0: '0°C',
    37: '37°C',
    100: {
      style: {
        color: '#f50',
      },
      label: <strong>100°C</strong>,
    },
  };

function onChange(checked) {
    console.log(`switch to ${checked}`);
}

function formatter(value) {
    return `${value}%`;
}

class Rooms extends Component{
    render(){
        return(
            <div className="App">
                <Header/>
                <div className="theRight">
                    <img className="bedroomImg" src={LivingroomRoom}/>
                </div>
                <div className="theLeft">
                    <div className="onOffRoomX">
                        Temperature : <Slider marks={marks} defaultValue={37} />    
                    </div>
                    
                        <div className="onOffRoomX">Light : On/Off <Switch  defaultChecked onChange={onChange} /></div>
                        <div className="onOffRoomX">Window : Open/Close <Switch  defaultChecked onChange={onChange} /></div>
                    
                </div>
                {/* <StickyContainer>
                <Tabs tabPosition="bottom" defaultActiveKey="1" style={{ marginLeft: 10 }}>
                    <TabPane tab="Temperature" key="1" style={{ height: 500 }}>
                        <div className="circle">Temperature</div>
                        <center><div className="onOffRoomX">
                        <Slider marks={marks} defaultValue={37} />
                        </div></center>
                    </TabPane>

                    <TabPane tab="Light" key="2" style={{ height: 500 }}>
                        <div className="circle">Light</div>
                        <center><div className="onOffRoomX">On/Off <Switch  defaultChecked onChange={onChange} /></div></center>
                    </TabPane>

                    <TabPane tab="Window" key="3" style={{ height: 500 }}>
                        <div className="circle">Window</div>
                        <center><div className="onOffRoomX">Open/Close <Switch  defaultChecked onChange={onChange} /></div></center>
                    </TabPane>
                </Tabs>
                </StickyContainer> */}
            </div>     
        );
    }
}

export default Rooms;
