var exec = require('child_process').exec;
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var sys = require('sys');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',function(req, res) {
  res.end('');
});

app.post('/',function(req, res) {
  if (req.body.key !== process.env.KEY) return res.end('');
  console.log(req.body.button + ' pressed.');
  res.end(req.body.button);
  switch (req.body.button) {
    case 'other-button':
      exec('curl -X POST --data-urlencode \'payload={"channel": "#jeopardy", "username": "nicksergeant", "text": "trebek jeopardy me", "icon_url": "http://i.nick.sg/image/352O2l124123/ht4bS0Qo.jpeg"}\' ' + process.env.OTHER_BUTTON);
    break;
  }
});

app.listen(process.env.PORT);
