var express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  port = process.env.PORT || 3333;
Task = require('./api/models/gstmodel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/gstroutes');
routes(app);
app.listen(port, () => {
  console.log('API server started on: ' + port);
});
