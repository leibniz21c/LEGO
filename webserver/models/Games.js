'use strict';

module.exports = (sequelize, DataTypes) => {
    const Games = sequelize.define('Games', {
      gameId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        primaryKey: true,
      },
      gameName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    }, {timestamps: false});

    Games.associate = function (models) {
      
    };
    return Games;
};