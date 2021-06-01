'use strict';

const path = require('path');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '\\..\\config\\config.json')[env];

const db = {};

const sequelize = new Sequelize(
  config.database, config.user, config.password, config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;


// Connection with models
db.Users = require('./User') (sequelize, Sequelize)
db.Boards = require('./Boards') (sequelize, Sequelize)
db.Comments = require('./Comments') (sequelize, Sequelize)

module.exports = db;
