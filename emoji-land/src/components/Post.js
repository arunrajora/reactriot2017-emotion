import React, { Component } from 'react';
import firebase from 'firebase';  
import reactfire from 'reactfire';

import ReactDOM from 'react-dom';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';

class Post extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
        value: '',
        emotion:'Happy'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {  
    this.firebaseRef = firebase.database().ref("posts");
 }

 componentWillUnmount() {  
    this.firebaseRef.off();
 }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.firebaseRef.push(
        {
            type:this.state.emotion,
            timestamp:Math.floor(Date.now()),
            content:this.state.value
        });
  }

  handleClick(event){
    this.setState({emotion:event.currentTarget.id});
  }

  render() {
    var emotion_values=["Happy","Sad","Confused","Angry","Love"];
    return (
            <form onSubmit={ this.handleSubmit }>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <ul>
                    {
                        emotion_values.map((value) =>
                        <li key={value.toString()} id={value} onClick={this.handleClick}>{value}</li>
                        )
                    }
                </ul>
                <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Post;