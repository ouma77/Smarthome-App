import React, {Component} from 'react';
import { Tabs, Switch, Slider  } from 'antd';
import { StickyContainer} from 'react-sticky';
import './App.css';

const { TabPane } = Tabs;

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
                <StickyContainer>
                <Tabs tabPosition="bottom" defaultActiveKey="1" style={{ marginLeft: 10 }}>
                    <TabPane tab="Temperature" key="1" style={{ height: 500 }}>
                        <div className="circle">Temperature</div>
                        <center><div className="onOffRoomX">
                        <Slider tipFormatter={formatter} />
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
                </StickyContainer>
            </div>     
        );
    }
}

export default Rooms;
