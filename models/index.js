'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

// console.log(config);
config.username = 'cpdzdwcn';
// config.ssl = true;

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// sequelize.sync({ alter: true }).then(() => {
//   console.log("DB refreshed");
//   // return sequelize.drop();
// }); 
 
sequelize.authenticate()
.then(()=>{
    console.log('Connection to database establised'); 
})
.catch(err => {
    console.error(`Unable to connect to database:`);
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user.hasMany(db.game);
db.game.belongsTo(db.user);

module.exports = db;
