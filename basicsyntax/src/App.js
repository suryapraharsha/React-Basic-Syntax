import React, { Component } from 'react';

import './App.css';
import UserOutput from './UserOutput/userOutput';
import UserInput from './UserInput/userInput';
import'./UserInput/userInput.css';
import './UserOutput/userOutput.css';

class App extends Component {
  state ={
    username:'surya'
  }
  eventHandler = (event) =>{
    this.setState({
      username:event.target.value
    });

  }
  render() {
    return (
      <div className="App">
        <UserOutput username ={this.state.username}/>
        <UserOutput username = {this.state.username}/>
        <UserInput changed={this.eventHandler} currentName = {this.state.username}/>
      </div>
    );
  }
}

export default App;
