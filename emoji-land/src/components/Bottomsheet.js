import React, { Component } from 'react';
import firebase from 'firebase';  
import reactfire from 'reactfire';

import ReactDOM from 'react-dom';

import Post from "./Post";

class BottomSheet extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
        isopen: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({isopen: !this.state.isopen});
  }

  render() {
    return (
        <div>
            <ul>
                <li onClick={this.handleChange}>
                    {this.state.isopen? <p>Close</p>:<p>Open</p>}
                </li>
                {this.state.isopen?<li ><Post /></li>:null}
            </ul>
        </div>
    );
  }
}

export default BottomSheet;