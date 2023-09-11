'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Examples extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // vfdgfd
      // define association here
    }
  }
  User.init({
    textExample: DataTypes.STRING(100),
    name: DataTypes.STRING(100),
    mail: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Example',
  });
  return User;
};