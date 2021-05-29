'use strict';

const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '\\..\\config\\config.json')[env];

const db = {};

const sequelize = new Sequelize(
  config.database, config.user, config.password, config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;


// Connection with models
db.User = require('./User') (sequelize, Sequelize)


module.exports = db;
