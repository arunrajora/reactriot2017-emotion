import React, { Component } from 'react';
import firebase from 'firebase';
import reactfire from 'reactfire';

class Bubbles extends Component {

    componentDidMount(){

        var myVar = setInterval(function(){
        var blocks=window.innerWidth/parseFloat(getComputedStyle(document.querySelector('body'))['font-size']);
        blocks=blocks/4.1;
        var arr=[];
        for(var i=0;i<blocks;i++){
            arr.push(Math.round(Math.random()+0.2)*(i+1));
        }
        var percentage= 4;
        arr.map((value)=>{
            if(value!==0){
                var img = document.createElement("img");
                img.src = require('../emojis/emoji.png');
                img.classList.add('dabba');
                img.onclick=function(){
                    alert("clicked");
                }
                var heha=percentage*(value-1)+1;
                img.style.marginLeft = heha.toString() + 'em';
                var src = document.getElementById("bubbla");
                src.appendChild(img);
            }
        });
        }, 1500);
    }

    componentWillMount() {
        this.firebaseRef = firebase.database().ref("heha");
    }

    componentWillUnmount() {
        this.firebaseRef.off();
    }
    render() {
        return (
            <div id="bubbla" className = "bubbles" >
            </div>
        );
    }
}

export default Bubbles;