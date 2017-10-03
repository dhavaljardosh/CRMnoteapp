import React, { Component } from 'react';
import CustomerDetails from './customerDetails/customerDetails';
import Notes from './notes/notes';
import UnitDetails from './unitDetails/unitDetails';
import WorkorderStatus from './workorderStatus/workorderStatus';

class Layout extends Component {
  render() {
    return (
        <div className="container layout">
          <div className="row"  style={this.props.style}>
            <div className="col s6" >
              <div className="card z-depth-3">
                <WorkorderStatus />
              </div>
              <div className="card z-depth-3">
                <CustomerDetails/>
              </div>
              <div className="card z-depth-3">
                <UnitDetails />
              </div>


            </div>

            <div className="col s6">
              <div className="card z-depth-3">
                <Notes/>
              </div>
            </div>
          </div>
        </div>

    );
  }
}

export default Layout;
