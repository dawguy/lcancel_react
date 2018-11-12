'use strict';
module.exports = (sequelize, DataTypes) => {
  var Stage = sequelize.define('stage', {
    name: DataTypes.STRING
  }, {
    timestamps : false,
  });
  Stage.associate = function(models) {
    Stage.hasOne( models.match, { as : 'stage', foreignKey : 'stage' } );
  };
  return Stage;
};