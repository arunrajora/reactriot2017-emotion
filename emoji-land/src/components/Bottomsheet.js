import React, { Component } from 'react';
import firebase from 'firebase';  
import reactfire from 'reactfire';

import ReactDOM from 'react-dom';

import Post from "./Post";

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

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

      const style = {
  marginRight: 20,
};

    return (
        <center>
        <div className="bottomsheet">
            <ul className="btsheet">
                {this.state.isopen?<li className="crdd"><Post /></li>:null}
                <li className="hehaoo">
                    
                        
                    {this.state.isopen?
                    <FloatingActionButton onClick={this.handleChange} mini={true}  style={style}><NavigationClose/></FloatingActionButton>
                    :
                    <FloatingActionButton onClick={this.handleChange} style={style}><ContentAdd /></FloatingActionButton>} 
                    
                    
                </li>
            </ul>
        </div>
        </center>
    );
  }
}

export default BottomSheet;