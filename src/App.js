import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/layout';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <img src="../src/MHD-Colors.png" className="App-logo" alt="logo" /> */}
          <h2 style={{paddingBottom:100}}>MHD NoteApp</h2>
        </div>
{/*     Here should be the Components                   */}
          <Layout style={{marginTop:5}} className="layout"/>

      </div>
    );
  }
}

export default App;
