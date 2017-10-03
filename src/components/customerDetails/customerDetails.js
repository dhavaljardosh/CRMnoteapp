import React, { Component } from 'react';

class CustomerDetails extends Component {
  render() {
    return (
      <div style={{padding:10}}>
        <span className="card-title" style={{fontSize:'1.2em'}}>Customer Details</span>
        <hr/>
        <div className="container-fluid">
          <div className="row">
            <div className="col m12 l6">
              <p><b>SR#</b>: 18235344</p>
              <p><b>WO#</b>: 123523</p>
              <p><b>Username</b>: dhavaljardosh@gmail.com</p>
              <p><b>Password</b>: usjcalrjsd</p>
              <p><b>Expiration</b>: 24th October,2017</p>
              <p><b>Email</b>: djardosh@gmail.com</p>
              <p><b>Claim ID</b>: 14124</p>
            </div>
            <div className="col m12 l6">
              <p><b>Name</b>: Dhaval Jardosh</p>
              <p><b>Address</b>: 9715 Burnet Road</p>
              <p><b>City</b>: Austin</p>
              <p><b>State</b>: Texas</p>
              <p><b>Zip</b>: 78758</p>
              <p><b>Home#</b>: Replacement Confirmed</p>
              <p><b>Claim Type</b>: 24th October,2017</p>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default CustomerDetails;
