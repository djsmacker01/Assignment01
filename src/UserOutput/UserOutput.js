import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  return (
  <div className='userOutput'>
    <p className='username'> UserName:{props.userName}</p>
    <p>pass something here also</p>
  </div>
  ); 
}

export default userOutput;