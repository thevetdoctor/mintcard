const users = require('./userRoutes');
const games = require('./gameRoutes');

module.exports = (app) => {
  // Declare Routes
  app.use('/auth', users);
  app.use('/games', games);
}; 