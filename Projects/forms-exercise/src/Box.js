import React, { Component } from 'react';

class Box extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            width: `${this.props.width}px`,
            height: `${this.props.height}px`,
            backgroundColor: this.props.color,
          }}
        />
        <button onClick={this.props.removeBox}>X</button>
      </div>
    );
  }
}

export default Box;
