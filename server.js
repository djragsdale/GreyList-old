
/**
 * Module dependencies.
 */

var express = require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  errorHandler = require('error-handler'),
  morgan = require('morgan'),
  routes = require('./routes'),
  //, user = require('./routes/user')
  api = require('./routes/api'),
  http = require('http'),
  path = require('path');

var app = module.exports = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(morgan('dev')); // from app.js
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(bodyParser());  // from app.js
  //app.use(express.bodyParser());
  app.use(methodOverride()); // from app.js
  //app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

//var env = process.env.NODE_ENV || 'development';

// development only
app.configure('development', function(){
  app.use(express.errorHandler());
});

// production only
app.configure('production', function () {
    // TODO
});


/**
 * Routes
 */

app.get('/', routes.index);
app.get('/partials/:name', routes.partials);
//app.get('/users', user.list);


// JSON API

app.get('/api/lists', api.lists);
app.get('/api/list/:id', api.list);
app.post('/api/list', api.addList);
app.put('/api/list/:id', api.editList);
app.delete('/api/list/:id', api.deleteList);

app.get('/api/templates', api.templates);
app.get('/api/template/:id', api.template);
//app.post('/api/template', api.addTemplate);
//app.put('/api/template/:id', api.editTemplate);
//app.delete('/api/template/:id', api.deleteTemplate);

app.get('/api/posts', api.posts);

app.get('/api/post/:id', api.post);
app.post('/api/post', api.addPost);
app.put('/api/post/:id', api.editPost);
app.delete('/api/post/:id', api.deletePost);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
