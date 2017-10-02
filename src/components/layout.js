import React, { Component } from 'react';
import CustomerDetails from './customerDetails/customerDetails';
import Notes from './notes/notes';
import UnitDetails from './unitDetails/unitDetails';
import WorkorderStatus from './workorderStatus/workorderStatus';

class Layout extends Component {
  render() {
    return (
        <div className="container-fluid" style={{border:"1px solid black"}}>
          <div className="row">
            <div className="col s6">
              <CustomerDetails/>
              <WorkorderStatus />
              <UnitDetails />
            </div>

            <div className="col s6">
              <Notes/>
            </div>
          </div>
        </div>

    );
  }
}

export default Layout;
