'use strict';
module.exports = (sequelize, DataTypes) => {
  var Stage = sequelize.define('stage', {
    name: DataTypes.STRING
  }, {});
  Stage.associate = function(models) {
    // associations can be defined here
  };
  return Stage;
};