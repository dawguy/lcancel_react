'use strict';
module.exports = (sequelize, DataTypes) => {
  var Stage = sequelize.define('stage', {
    name: DataTypes.STRING
  }, {});
  Stage.associate = function(models) {
    Stage.belongsTo( models.match, { as : 'stage' } );
  };
  return Stage;
};