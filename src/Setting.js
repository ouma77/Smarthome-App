import React, {Component} from 'react';
import { Card,Avatar } from 'antd';
import { KeyOutlined,WindowsOutlined,AlertOutlined } from '@ant-design/icons';
import './App.css';
import lampe from './images/lampe.jpg';
import temperature from './images/temperature.jpg';

const style = { background: '#007bff', padding: '8px 0' };

class Setting extends Component{
    render(){
        return(
            <div className="App">
                <Card
                style={{ marginTop: 16 }}
                type="inner">
                <Avatar size={40} src={temperature} />
                Température
                </Card>
                <Card
                style={{ marginTop: 16 }}
                type="inner">
                <Avatar size={40} style={{ color: '#007bff' , background:'none' }}icon={<AlertOutlined />}/>
                Alert
                </Card>

                <Card
                style={{ marginTop: 16 }}
                type="inner">
                <Avatar size={40} src={lampe} />
                Mouvement ligth
                </Card>

                <Card
                style={{ marginTop: 16 }}
                type="inner">
                <Avatar size={40} src={lampe} />
                Light
                </Card>

                <Card
                style={{ marginTop: 16 }}
                type="inner">
                <Avatar size={40} style={{ color: '#007bff' , background:'none' }}icon={<KeyOutlined />}/>
                Door System
                </Card>
                
                <Card
                style={{ marginTop: 16 }}
                type="inner">
                <Avatar size={40} style={{ color: '#007bff' , background:'none' }}icon={<KeyOutlined />}/>
                Door : Garage
                </Card>

                <Card
                style={{ marginTop: 16 }}
                type="inner">
                <Avatar size={40} style={{ color: '#007bff' , background:'none' }}icon={<WindowsOutlined />}/>
                Window
                </Card>

            </div>

            
        );
    }
}

export default Setting;
