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
      exec(process.env.OTHER_BUTTON);
    break;
  }
});

app.listen(process.env.PORT);
