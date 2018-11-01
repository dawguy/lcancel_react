'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('user', {
    name: DataTypes.STRING,
    elo: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    User.hasOne( models.match, { as : 'winning_user', foreignKey : 'winning_user' } );
    User.hasOne( models.match, { as : 'losing_user', foreignKey : 'losing_user' } );
  };
  return User;
};