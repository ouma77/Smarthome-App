import React, {Component} from 'react';
import {BrowserRouter , Route} from 'react-router-dom';
import './App.css';
import './index.css';
import Landing from './Landing.js';
import SignIn from './SignIn.js';
import Home from './Home.js';
import Rooms from './Rooms.js';
import Setting from './Setting.js';
import Bedroom from './Bedroom.js';
import Bedroom2 from './Bedroom2.js';
import LivingRoom from './LivingRoom.js';
import Kitchen from './kitchen.js';
import Header from './Header.js';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Landing} />
        <Route path="/SignIn" component={SignIn} />
        {/* <Header /> */}
        {/* Le header ne doit pas etre fo9 SignIn et Landing page !!! */}
        <Route path="/Home" component={Home} />
        <Route path="/Rooms" component={Rooms} />        
        <Route path="/Setting" component={Setting} />
        <Route path="/Bedroom" component={Bedroom} />
        <Route path="/Bedroom2" component={Bedroom2} />
        <Route path="/kitchen" component={Kitchen} />
        <Route path="/LivingRoom" component={LivingRoom} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
