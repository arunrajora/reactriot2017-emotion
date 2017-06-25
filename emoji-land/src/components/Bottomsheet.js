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
        <center>
        <div className="bottomsheet">
            <ul className="btsheet">
                <li onClick={this.handleChange}>
                    Post{this.state.isopen? <img src={require('../emojis/open.svg')}/>:<img src={require('../emojis/close.svg')}/>}
                </li>
                {this.state.isopen?<li ><Post /></li>:null}
            </ul>
        </div>
        </center>
    );
  }
}

export default BottomSheet;