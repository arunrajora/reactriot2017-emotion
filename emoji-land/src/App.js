import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';
import reactfire from 'reactfire';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Bottomsheet from './components/Bottomsheet';
import Bubbles from './components/Bubbles';
import Help from './components/Help'; 

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const config = {
    apiKey: "AIzaSyDksGHSF4G1Bf9OaTV4_6uknskxAZh_k8Q",
    authDomain: "emoji-land-4b7d8.firebaseapp.com",
    databaseURL: "https://emoji-land-4b7d8.firebaseio.com",
    projectId: "emoji-land-4b7d8",
    storageBucket: "emoji-land-4b7d8.appspot.com",
    messagingSenderId: "851877396193"
};
firebase.initializeApp(config);

injectTapEventPlugin();

class App extends Component {

    componentWillMount() {
        this.firebaseRef = firebase.database().ref("heha");
    }

    componentWillUnmount() {
        this.firebaseRef.off();
    }
    render() {
        return ( 
            <MuiThemeProvider muiTheme={getMuiTheme()}>
            <div className = "app" >
                <Bubbles/>
                <Bottomsheet/>
                <Help/>
            </div>
            </MuiThemeProvider>
        );
    }
}

export default App;