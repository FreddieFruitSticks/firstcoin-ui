import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';
 
export default class Example extends Component {
  state = {
    height: 0,
  };
 
  toggle = () => {
    const { height } = this.state;
 
    this.setState({
      height: height === 0 ? 'auto' : 0,
    });
  };
 
  render() {
    const { height } = this.state;
 
    return (
      <div>
        <button 
          aria-expanded={ height !== 0 }
          aria-controls='example-panel'
          onClick={ this.toggle }
        >
          { height === 0 ? 'Open' : 'Close' }
        </button>
 
        <AnimateHeight
          id='example-panel'
          duration={ 500 }
          height={ height }
        >
          <h1>Your content goes here</h1>
          <p>Put as many React or HTML components here.</p>
        </AnimateHeight>
      </div>
    );
  }
}