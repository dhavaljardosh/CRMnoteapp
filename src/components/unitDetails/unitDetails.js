import React, { Component } from 'react';

class UnitDetails extends Component {
  render() {
    return (
      <div style={{padding:'5px 10px 0px'}}>
        <span className="card-title headers">Unit Details</span>
        <hr/>
        <div className="container-fluid">
          <div className="row">
            <div className="col m12 l6">
              <p><b>Dealer</b>: FINGERHUT</p>
              <p><b>Type</b>: Tablet</p>
              <p><b>Unit Price</b>: 579.99</p>
              <p><b>Purchase Date</b>: Oct 3, 2017</p>
              <p><b>Refur Approved</b>: Approved</p>
              <p><b>Additional Specs</b>: 	iPad Air</p>
              <p><b>Threshold</b>: 579.99</p>
              <p><b>Condition</b>: New</p>
              <p><b>Unit Description</b>: APPLE INC MD785LL/B DMPPFGL3FK10 MD785LL/B</p>
              <p><b>MFG</b>: 	Apple</p>
              <p><b>Part#</b>: MD785LL/B</p>
            </div>
            <div className="col m12 l6">
              <p><b>Model#</b>: A1474</p>
              <p><b>CPU Model#</b>: A7</p>
              <p><b>Hard Drive</b>: </p>
              <p><b>SSD</b>: 16GB</p>
              <p><b>RAM</b>: 1GB</p>
              <p><b>LCD Size</b>: 9.7</p>
              <p><b>Touch Screen</b>: Yes</p>
              <p><b>Blu Ray</b>: No</p>
              <p><b>Data Plan</b>: No</p>
              <p><b>Serial#</b>: </p>
              <p><b>Benchmark</b>: </p>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default UnitDetails;
