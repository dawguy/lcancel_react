'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('user', {
    name: DataTypes.STRING,
    elo: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
  };
  return User;
};