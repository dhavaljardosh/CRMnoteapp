import React, { Component } from 'react';
import CustomerDetails from './customerDetails/customerDetails';
import Notes from './notes/notes';
import UnitDetails from './unitDetails/unitDetails';
import WorkorderStatus from './workorderStatus/workorderStatus';

class Layout extends Component {
  render() {
    return (
      <div style={{border: "3px solid black", display: 'flex', height:400}}>
        Outer Component
      </div>

    );
  }
}

export default Layout;
