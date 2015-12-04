# Controllers
Defined in public/js/controllers.js. Grabs data from REST API actions then passes it to $scope.
Actions are defined in routes/api.js, passing data through the REST API.

# Views
The router assigns views/partials and controllers in public/js/app.js.

# Data
Assigned in routes/api.js.

# REST API
Rest API methods are assigned to routes in server.js.
API methods are defined in routes/api.js, passing data through the REST API.

# Form events
Defined in public/js/controllers.js and assigned to $scope.

# Scripts
MEAN apps don't work unless mongod has been run (usuallyl on a nodejs prompt)
E.g. "C:\Program Files\MongoDB\Server\3.0\bin\mongod" -dbpath "C:\Program Files\MongoDB\database" --rest
Then npm start can be run as long as the start script has been included in package.json.
