
/*
 * GET home page.
 */

var routes = {
  index: function(req, res) {
    res.render('index', { title: 'Auth0 Test App' });
  }
}

module.exports = routes;