exports = module.exports = function(app) {
  // Front page
  app.get('/', require('./views/index').init);

  //Pull status
  app.get('/:userid/:repo/:id', require('./views/status/index').pullStatus);
  
  //route not found
  app.all('*', require('./views/http/index').http404);
};