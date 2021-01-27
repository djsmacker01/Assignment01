import React from 'react';

const UserInput = (props) => {
  return (
    <div className="container">
      UserName <input type="text" 
      onChange={ props.change}
      value={props.defaultName}/>
    </div>
  )
}

export default UserInput