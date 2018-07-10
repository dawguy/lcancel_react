'use strict';
module.exports = (sequelize, DataTypes) => {
  var Match = sequelize.define('match', {
    winning_user: DataTypes.INTEGER,
    losing_user: DataTypes.INTEGER,
    winning_character: DataTypes.INTEGER,
    losing_character: DataTypes.INTEGER,
    stage: DataTypes.INTEGER
  }, {});
  Match.associate = function(models) {
  };
  return Match;
};