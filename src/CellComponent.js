import React, { Component } from 'react';
import './cell.css';

class CellComponent extends Component {
    render() {
        return (
            <div onClick={() => toggleState()} className='cell'>
            </div>
        );
    }
}

let toggleState = () => {
    this.state = !(this.state);
}

export default CellComponent;
