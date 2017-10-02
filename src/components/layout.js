import React, { Component } from 'react';
import CustomerDetails from './customerDetails/customerDetails';
import Notes from './notes/notes';
import UnitDetails from './unitDetails/unitDetails';
import WorkorderStatus from './workorderStatus/workorderStatus';

class Layout extends Component {
  render() {
    return (
        <div className="container">
          <div className="row"  style={{marginTop:20}}>
            <div className="col s6">
              <div className="card">
                <WorkorderStatus />
              </div>
              <div className="card">
                <CustomerDetails/>
              </div>
              <div className="card">
                <UnitDetails />
              </div>


            </div>

            <div className="col s6">
              <div className="card">
                <Notes/>
              </div>
            </div>
          </div>
        </div>

    );
  }
}

export default Layout;
