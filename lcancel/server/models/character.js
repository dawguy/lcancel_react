'use strict';

module.exports = (sequelize, DataTypes) => {
  var Character = sequelize.define('character', {
    name: DataTypes.STRING,
  }, {});

  Character.associate = function( models ){
    Character.hasOne( models.match, { as : 'winning_character', foreignKey : 'winning_character' } );
    Character.hasOne( models.match, { as : 'losing_character', foreignKey : 'losing_character' } );
  }

  return Character;
};