import React, { Component } from 'react';
import Dogs from "./components/dogs/Dogs";
import Explanation from "./components/explanation/Explanation";

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="principal-container">
        <Dogs />
        <Explanation />
      </div>
    );
  }
}


export default App;