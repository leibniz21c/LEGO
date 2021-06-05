'use strict';

const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const GameLogs = sequelize.define('GameLogs', {
        userId: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        gameId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
        }, { timestamps: false});
    GameLogs.associate = function (models) {

    };
    return GameLogs;
};