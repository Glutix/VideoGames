//! Import
const { DataTypes } = require("sequelize");

//! Injected Connection to Sequelize
module.exports = (database) => {
	database.define("Genre", {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});
};
