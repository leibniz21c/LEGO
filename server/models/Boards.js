'use strict';

const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Boards = sequelize.define('Boards', {
      boardId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      regdate: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
      modidate: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
      viewCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      }
    }, {timestamps: false});

    Boards.associate = function (models) {
      
    };
    return Boards;
};