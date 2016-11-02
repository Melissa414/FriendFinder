var htmlRoutes = require('../routing/html-routes.js');
var apiRoutes = require('../routing/api-routes.js');


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
  });
};