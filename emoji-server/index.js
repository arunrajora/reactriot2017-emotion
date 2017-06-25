const express = require('express')
const app = express()

var admin = require("firebase-admin");
var serviceAccount = require("./emoji-land-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://emoji-land-4b7d8.firebaseio.com/"
});

var db = admin.database();
var ref = db.ref("posts");

var emotion_values=["Happy","Sad","Confused","Angry","Love"];
var data=[["I passed my exams",0],["I failed my exams",1],["Lost the football match",2],["Loved the game tonight",3]];

var cnt=0;

setInterval(function(){
    var idx=Math.floor(Math.random()*data.length);
    console.log("Count",cnt++);
    ref.push().set({
            type:emotion_values[data[idx][1]],
            timestamp:Math.floor(Date.now()),
            content:data[idx][0]
    });
},5000);

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})