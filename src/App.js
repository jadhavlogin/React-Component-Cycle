import React, { Component } from 'react';
import logo from './logo.svg';
import lifeCycle from './reactComponentLifeCycle.png';
import './App.css';

import NewComponent from './NewComponent';

class App extends Component {
  constructor(){
    super()
    console.log("In constructor");
  }
  componentWillMount(){
    console.log("In component will mount..");
  }
  render() {
    console.log("In Render..");
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Component Life Cycle</h1>
        </header>
        <p className="App-intro">
          Inspect the Tab and Go to Console. Refer below pahases and life cycle methods
        </p>
        <NewComponent></NewComponent>
        <h2>Life Cycle Diagram</h2>
        <img src={lifeCycle} className="life-cycle-logo" alt="logo" />
      </div>
    );
  }
  componentDidMount(){
    console.log("In component did mount..");
  }

  componentWillReceiveProps(){
    console.log("In component will receive update..");
  }
  shouldComponentUpdate(){
    console.log("In should component update..");
  }
  componentWillUpdate(){
    console.log("In component will update..");
  }
  componentDidUpdate(){
    console.log("In component did update..");
  }
  componentWillUnmount(){
    console.log("In component will unmount..");
  }
}

export default App;
