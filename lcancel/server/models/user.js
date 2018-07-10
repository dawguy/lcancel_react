'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('user', {
    name: DataTypes.STRING,
    elo: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    User.belongsTo( models.match, { as : 'winning_user' } );
    User.belongsTo( models.match, { as : 'losing_user' } );
  };
  return User;
};