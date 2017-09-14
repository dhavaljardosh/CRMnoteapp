import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import mhdlogo from './mhd.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header" style={{height:200}}>
          <img src={logo} className="App-logo" alt="logo" style={{height:120,width:120, marginBottom: -40}}/>
          {/* <img src={{mhdlogo}} style={{height:500,zIndex:1000}}/> */}
          <h2 style={{fontSize:60}}>This is MHD NoteApp</h2>
        </div>
        <p className="App-intro" style={{fontSize:40}}>
          Will start to <code>code</code> tomorrow.
        </p>
      </div>
    );
  }
}

export default App;
