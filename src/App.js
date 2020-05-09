import React, {Component} from 'react';
import './App.css';
import './index.css';
import Landing from './Landing.js'
import SignIn from './SignIn.js'
import Home from './Home.js'
import Rooms from './Rooms.js'

class App extends Component{
  render(){
    return(
      <div className="App">
        <SignIn />
      </div>
    );
  }
}

export default App;
