import React, {Component} from 'react';
import { Tabs,Select} from 'antd';
import { StickyContainer, Sticky } from 'react-sticky';
import './App.css';
import lampe from './images/lampe.png';

const { TabPane } = Tabs;

const renderTabBar = (props, DefaultTabBar) => (
    <Sticky>
      {({ style }) => (
        <DefaultTabBar {...props} className="site-custom-tab-bar" style={{ ...style }} />
      )}
    </Sticky>
);

class Rooms extends Component{
    render(){
        return(
            <div className="App">
                <StickyContainer>
                <Tabs tabPosition="bottom" defaultActiveKey="1" style={{ marginLeft: 55 }}>
                    <TabPane tab="Temperature" key="1" style={{ height: 572 }}>
                        <div className="circle">Temperature</div>
                    </TabPane>
                    <TabPane tab="Light" key="2">
                        <div className="circle">Light</div>
                    </TabPane>
                    <TabPane tab="Window" key="3">
                        <div className="circle">Window</div>
                    </TabPane>
                </Tabs>
                </StickyContainer>
            </div>     
        );
    }
}

export default Rooms;
