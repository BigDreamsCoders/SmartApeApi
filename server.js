const express = require('express'),
  app = express(),
  path = require('path')
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  morgan = require('morgan'),
  Task = require('./api/models/listModels');



// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://smartape:holaalex7.@cluster0-l1zkx.mongodb.net/test?');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');


app.use('/', express.static('app'));

// Default every route except the above to serve the index.html




var routes = require('./api/routes/listRoutes'); //importing route

routes(app); //register the route


app.listen(port);





console.log('todo list RESTful API server started on: ' + port);
