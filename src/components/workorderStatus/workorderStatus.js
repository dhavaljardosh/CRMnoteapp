import React from 'react';

export default class WorkorderStatus extends React.Component {
  render() {
    return (
      <div style={{padding:'10px 15px 0px'}}>
        <span className="card-title" style={{fontSize:'1.5em'}}>Work Order Status</span>
        <hr/>
        <div className="container-fluid">
          <div className="row">
            <div className="col m12 l6">
              <p><b>Created</b>: 24th October,2017</p>
              <p><b>Status</b>: Replacement Confirmed</p>
            </div>
            <div className="col m12 l6">
              <p><b>Sub-Status</b>: Replacement Confirm</p>
              <p><b>Status Note</b>: </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
