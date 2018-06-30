'use strict';
module.exports = (sequelize, DataTypes) => {
  var Match = sequelize.define('Match', {
    winning_user: DataTypes.INTEGER,
    losing_user: DataTypes.INTEGER,
    winning_character: DataTypes.INTEGER,
    losing_character: DataTypes.INTEGER,
    stage: DataTypes.INTEGER
  }, {});
  Match.associate = function(models) {
    // associations can be defined here
  };
  return Match;
};