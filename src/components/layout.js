import React, { Component } from 'react';
import CustomerDetails from './customerDetails/customerDetails';
import Notes from './notes/notes';
import UnitDetails from './unitDetails/unitDetails';
import WorkorderStatus from './workorderStatus/workorderStatus';

class Layout extends Component {
  render() {
    return (
      <div style={{border: "3px solid black", display: 'flex',flexDirection:'column', height:400}}>
        <CustomerDetails/>
        <Notes/>
        <WorkorderStatus />
        <UnitDetails />
      </div>

    );
  }
}

export default Layout;
