'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  game.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },    
    uniqueid: DataTypes.STRING,
    type: DataTypes.STRING,
    winner: DataTypes.STRING,
    player: DataTypes.STRING,
    opponent: DataTypes.STRING,
    duration: DataTypes.STRING,
    state: DataTypes.JSONB
  }, {
    sequelize,
    modelName: 'game',
  });
  return game;
};