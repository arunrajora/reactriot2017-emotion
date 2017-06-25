import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';
import reactfire from 'reactfire';


import Bottomsheet from './components/Bottomsheet';


const config = {
    apiKey: "AIzaSyDksGHSF4G1Bf9OaTV4_6uknskxAZh_k8Q",
    authDomain: "emoji-land-4b7d8.firebaseapp.com",
    databaseURL: "https://emoji-land-4b7d8.firebaseio.com",
    projectId: "emoji-land-4b7d8",
    storageBucket: "emoji-land-4b7d8.appspot.com",
    messagingSenderId: "851877396193"
};
firebase.initializeApp(config);


class App extends Component {

    componentWillMount() {
        this.firebaseRef = firebase.database().ref("heha");
    }

    componentWillUnmount() {
        this.firebaseRef.off();
    }
    render() {
        return ( 
            <div className = "app" >
                <Bottomsheet/>
            </div>
        );
    }
}

export default App;