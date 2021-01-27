import React from 'react';
import './UserInput.css'

const userInput = (props) => {
  return <label className="label"> UserName: 
    <input type="text" className="input"
      onChange={props.change}
      value ={props.currentUserName} />
  </label>
}

export default userInput;