'use strict';

module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {timestamps: false});

    Users.associate = function (models) {

    };
    return Users;
};