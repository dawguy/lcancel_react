'use strict';

module.exports = (sequelize, DataTypes) => {
  var Character = sequelize.define('character', {
    name: DataTypes.STRING,
  }, {});

  Character.associate = function( models ){
  }

  return Character;
};