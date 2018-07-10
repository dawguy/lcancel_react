'use strict';

module.exports = (sequelize, DataTypes) => {
  var Character = sequelize.define('character', {
    name: DataTypes.STRING,
  }, {});

  Character.associate = function( models ){
    Character.belongsTo( models.match, { as : 'winning_character' } );
    Character.belongsTo( models.match, { as : 'losing_character' } );
  }

  return Character;
};