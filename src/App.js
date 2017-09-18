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
          <h2>This is MHD NoteApp</h2>
        </div>
{/*     Here should be the Components                   */}
        <Layout>

        </Layout>

      </div>
    );
  }
}

export default App;
