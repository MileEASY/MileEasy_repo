const Sequelize = require("sequelize");
const config = require("../config/config.js")["mile"];

const db = {};
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = require('./User')(sequelize, Sequelize);
db.Trip = require('./Trip')(sequelize, Sequelize);

module.exports = db;