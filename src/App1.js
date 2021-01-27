import React, { Component } from 'react'
import './App.css'
import UserInput from './Components/Input/UserInput'
import UserOutput from './Components/Output/UserOutput'

class App1 extends Component {

  state = {
    username:'oyepeju'
  }
  changeNameHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  render() {
    return (
      <div className='App'>
        
        <UserInput change={
          this.changeNameHandler}
          defaultName={ this.state.username}/>
        <UserOutput changeName={ this.state.username}/>
        <UserOutput  changeName='Smart'/>
        <UserOutput changeName={ this.state.username}/>
      </div>
    )
  }
}

export default App1
