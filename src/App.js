import React, {Component} from 'react';
import './App.css';
import './index.css';
import Landing from './Landing.js';
import SignIn from './SignIn.js';
import Home from './Home.js';
import Rooms from './Rooms.js';
import Setting from './Setting.js';
import Bedroom from './Bedroom.js';
import Header from './Header.js';

class App extends Component{
  render(){
    return(
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
