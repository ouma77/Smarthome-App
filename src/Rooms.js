import React, {Component} from 'react';
import { Col, Row,Divider} from 'antd';
import './App.css';
import bedroom from './images/bedroom.png';
import bedroom2 from './images/bedroom2.png';
import kitchen from './images/kitchen.png';
import livingroom from './images/livingroom.png';

const style = { background: '#007bff', padding: '8px 0' };

class Rooms extends Component{
    render(){
        return(
            <div className="App">
                <div className='Rooms'>

                </div>
               <Divider orientation="left">
                   <h1>Hello <span className="smarthome">User</span></h1>
               </Divider>
               
               <Row>
                   <Col className="gutter-row" span={12}>     
                   <img className="imgRoom" src={kitchen}></img>
                   </Col>

                   <Col className="gutter-row" span={12}>     
                   <img className="imgRoom" src={bedroom}></img>
                   </Col>

                   {/* <Col className="gutter-row" span={6}>     
                   <img className="imgRoom" src={bedroom2}></img>
                   </Col>

                   <Col className="gutter-row" span={6}>     
                   <img className="imgRoom" src={livingroom}></img>
                   </Col> */}
                </Row>

                <Row>                   

                   <Col className="gutter-row" span={12}>  
                   <img className="imgRoom" src={livingroom}></img>   
                   </Col>

                   <Col className="gutter-row" span={12}>     
                   <img className="imgRoom" src={bedroom2}></img>
                   </Col>
                </Row>
            </div>

            
        );
    }
}

export default Rooms;
