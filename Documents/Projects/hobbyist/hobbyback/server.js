
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

var findMyHobby = new require('/Users/Kunbargi/Documents/Projects/hobbyist/hobbyback/findhobby.js')


app.use(bodyParser.json());

app.use(function (req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/getParams', function (req, res) {
  hobbyFinder(req.body)
})

app.get('/getactivity',function (req,res){
  aHobby = new findMyHobby()
  aHobby.findHobby(req.query,function(resToSend){
    res.contentType("text/plain")

    activity = JSON.stringify({activityForUser:resToSend});
    res.write(activity)
    res.end()
  })
});

app.listen(port, function () {
  console.log('Express started on port: ', port);
});
