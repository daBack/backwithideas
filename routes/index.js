/*
 * GET home page.
 */

exports.index = function(req, res) {
  res.render('index', {title: 'Startup'});
};

exports.gallery = function(req, res) {
  res.render('gallery', {title: 'Startup'});
};
