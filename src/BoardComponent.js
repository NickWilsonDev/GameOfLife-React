import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CellComponent from './CellComponent.js';

class BoardComponent extends Component {
  render() {
    return (
      <div className="Board">
            <CellComponent />
      </div>
    );
  }
}

export default BoardComponent;
