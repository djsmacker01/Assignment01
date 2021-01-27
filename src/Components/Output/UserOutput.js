import React from 'react'



const UserOutput = (props) => {
  return (
    <div className="container">
      <p> My name is { props.changeName}</p>
      <p> this is all about react library </p>
    </div>
  )
}

export default UserOutput;