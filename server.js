
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');



var app = express(); // Tells node that we are creating an "express" server
var PORT = process.env.PORT || 8080; // Sets an initial port. We'll use this later in our listener

// BodyParser makes it easy for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);

app.get('/api/:characters?', function (req, res) {
  var chosen = req.params.characters;

  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < characters.length; i++) {
      if (chosen === characters[i].routeName) {
        res.json(characters[i]);
        return;
      }
    }

    res.json(false);
  } else {
    res.json(characters);
  }
});

// app.post('/add', function (req, res) {
//   console.log("Adding data");
//   console.log(req);
// });

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});