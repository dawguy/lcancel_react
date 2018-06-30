'use strict';
module.exports = (sequelize, DataTypes) => {
  var Character = sequelize.define('Character', {
    name: DataTypes.STRING
  }, {});
  Character.associate = function(models) {
    // associations can be defined here
  };
  return Character;
};