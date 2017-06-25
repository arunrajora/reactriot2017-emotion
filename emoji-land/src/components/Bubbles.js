import React, { Component } from 'react';
import firebase from 'firebase';
import reactfire from 'reactfire';

class Bubbles extends Component {

    componentDidMount(){
        this.firebaseRef = firebase.database().ref("posts");
        var heha=this.firebaseRef;
        var bubbla=function(value,content,type){
            if(value!==0){
                var img = document.createElement("img");
                switch(type){
                    case "Happy":
                        img.src = require('../emojis/Happy.png');
                    break;
                    case "Sad":
                        img.src = require('../emojis/Sad.png');
                    break;
                    case "Confused":
                        img.src = require('../emojis/Confused.png');
                    break;
                    case "Angry":
                        img.src = require('../emojis/Angry.png');
                    break;
                    case "Love":
                        img.src = require('../emojis/Love.png');
                    break;
                }
                img.classList.add('dabba');
                img.onclick=function(){
                    alert(content);
                }
                var percentage= 4;
                var heha=percentage*(value-1)+1;
                img.style.marginLeft = heha.toString() + 'em';
                var src = document.getElementById("bubbla");
                console.log("got-------",src);
                src.appendChild(img);
            }
        }; 
        var cnt=0;
        setInterval(function(){
            var blocks=window.innerWidth/parseFloat(getComputedStyle(document.querySelector('body'))['font-size']);
            blocks=blocks/4.1;
            var arr=[];
            var req=0;
            for(var i=0;i<blocks;i++){
                arr.push(Math.round(Math.random()+0.2)*(i+1));
                if(arr[i]!==0){
                    req++;
                }
            }
            heha.orderByChild('timestamp').startAt(Math.floor(Date.now())-30000).limitToLast(req).once('value', function(dataa) {
                dataa.forEach(function(data,pos) {
                if(arr[cnt]!==0)
                    bubbla(arr[cnt],data.val().content,data.val().type);
                cnt++;
                cnt%=arr.length;
                });

            });
        }, 1500);
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