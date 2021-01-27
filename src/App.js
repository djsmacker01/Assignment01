import React, {Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput'


class App extends Component{
   
  state = {
  username: 'Sulphur'
  }

  inputHandler = (event) => {
    this.setState({username: event.target.value})
  }

  render() {
    return (
      <div className="App">
      
        <UserInput
          change={this.inputHandler}
          currentUserName={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName='ADEWALE'/>
        
      </div>
    )
  }
}

export default App;
