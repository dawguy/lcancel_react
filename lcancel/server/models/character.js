'use strict';

module.exports = (sequelize, DataTypes) => {
  const Character = sequelize.define('character', {
    name: DataTypes.STRING,
  }, {});

  return Character;
};