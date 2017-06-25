import React, { Component } from 'react';
import firebase from 'firebase';  
import reactfire from 'reactfire';

import ReactDOM from 'react-dom';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

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
    if(this.state.value.length>100){
       return;
    }
    this.firebaseRef.push(
        {
            type:this.state.emotion,
            timestamp:Math.floor(Date.now()),
            content:this.state.value
        });
    this.setState({value: ""});
  }

  handleClick(event){
    this.setState({emotion:event.currentTarget.id});
  }

  render() {
    var emotion_values=["Happy","Sad","Confused","Angry","Love"];
    const style = {
  margin: 12,
};
    return (
      <center>
        <Card>
            <form>
              <TextField value={this.state.value} onChange={this.handleChange}
                  hintText="Post your emotion anonymously here! (maximum 100 characters)"
                  multiLine={true}
                  errorText={this.state.value.length>100?"Maximum 100 Characters":null}
                  rows={4}
                  rowsMax={4}/>
                <ul className="messemo">
                    {
                        emotion_values.map((value) =>
                        <li key={value.toString()} id={value} onClick={this.handleClick}><img className={this.state.emotion===value?"bada":"chota"} src={require('../emojis/'+value+'.png')}/></li>
                        )
                    }
                </ul>
                <RaisedButton onClick={this.handleSubmit} label="Post" primary={true} style={style} />
            </form>
        </Card>
      </center>
    );
  }
}

export default Post;