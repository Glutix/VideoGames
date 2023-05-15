//! Import
const { DataTypes } = require("sequelize");

//! Injected Connection to Sequelize
module.exports = (database) => {
	database.define("Genre", {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
			unique: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});
};
