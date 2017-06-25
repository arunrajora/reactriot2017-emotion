import React, { Component } from 'react';
import firebase from 'firebase';  
import reactfire from 'reactfire';

import ReactDOM from 'react-dom';

import Post from "./Post";
import Filter from "./Filter";
import Toggle from "./Toggle";

class BottomSheet extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
        auth : 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {  
    this.firebaseRef = firebase.database().ref("posts");
 }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
        <div>
            <Post/>
        </div>
    );
  }
}

export default Post;