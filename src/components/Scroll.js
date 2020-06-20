import React, { Component } from 'react';

const Scroll = (props) => {
  return (
    // TODO: Study overflowY
    <div style={{overflowY: 'scroll', border: '1px solid black', height: '500px'}}>
      {props.children}
    </div>
  );
};




export default Scroll;
