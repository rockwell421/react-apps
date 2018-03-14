import React from 'react';
import './UserOutput.css';

const output = (props) => {
  return (
    <div className="UserOutput">
      <p onChange={props.changed}>Username: {props.name}</p>
    </div>
  )
};

export default output;
