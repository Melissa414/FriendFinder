var htmlRoutes = require('../routing/html-routes.js');
var apiRoutes = require('../routing/api-routes.js');
var friendsArray = require('../data/friends.js');


module.exports = function (app) {

    app.get('/api/html', function (req, res) {
    res.json(htmlRoutes);
  });
    app.get('/api/api', function (req, res) {
    res.json(apiRoutes);
  });

app.post('/api/html', function (req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    if (htmlRoutes.length < 5) {
      htmlRoutes.push(req.body);
      res.json(true); // KEY LINE
    } else { // Or false if they don't have a table
      apiRoutes.push(req.body);
      res.json(false); // KEY LINE
    }

var match = {};
    var diffArray = [];
    var totalNew = 0;
    var count = 0;
    var index = 0;
    var total = 0;
    var totalArray = [];
    var differenceTotal = 0;
    var friends = friendsArray;



function totalNewArray(){
      for (var i = 0; i<req.body.scores.length; i++){
      totalNew += parseInt(req.body.scores[i]);
      }

      console.log(totalNew);
      pushArray();
    }
function pushArray() {
      for (var i = 0; i<friendsArray.length; i++) {
        for (var x = 0; x<friendsArray[i].scores.length; x++) {
          total += parseInt(friendsArray[i].scores[x]);
        }
        totalArray.push(total);
        total = 0;
      }
      console.log(totalArray);
      difference();
    }
function difference(){
      for (var j = 0; j<totalArray.length; j++) {
        differenceTotal = Math.abs(parseInt(totalNew) - parseInt(totalArray[j]));
        diffArray.push(differenceTotal);
        differenceTotal = 0;
      }
      console.log("This is the diffarray " + diffArray);
      indexOfSmallest();
    }
function indexOfSmallest() {
      index = 0;
      var value = diffArray[0];
      for (var i = 1; i < diffArray.length; i++) {
        if (diffArray[i] < value) {
            value = diffArray[i];
            index = i;
          }
      }
      matchSelect();
    }
function matchSelect(req) {
      match = {
        name: friendsArray[index].name,
        photo: friendsArray[index].photo
      };
    }
    console.log("Match found: " + match.name + "\n");
    friendsArray.push(req.body);
    res.json(match);
  });
};