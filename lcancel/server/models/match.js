'use strict';
module.exports = (sequelize, DataTypes) => {
  var Match = sequelize.define('match', {
/*    winning_user: DataTypes.INTEGER,
    losing_user: DataTypes.INTEGER,
    winning_character: DataTypes.INTEGER,
    losing_character: DataTypes.INTEGER,
    stage: DataTypes.INTEGER */
  }, {});
  Match.associate = function(models) {
    Match.belongsTo( models.character, { as : 'winning_character' } );
    Match.belongsTo( models.character, { as : 'losing_character' } );
    Match.belongsTo( models.user, { as : 'winning_user' } );
    Match.belongsTo( models.user, { as : 'losing_user' } );
    Match.belongsTo( models.stage, { as : 'stage' } );
  };
  return Match;
};