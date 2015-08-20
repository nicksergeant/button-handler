var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/',function(req, res) {
  if (req.body.key !== process.env.KEY) return res.end('');
  res.end(req.body.button);
});

app.listen(process.env.PORT);
