import React, { Component } from 'react';
import './App.css';
import Dogs from "./components/Dogs";
// import DogsImages from "./components/DogsImages";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dogs />
        {/* <DogsImages /> */}
      </div>
    );
  }
  
}

export default App;
