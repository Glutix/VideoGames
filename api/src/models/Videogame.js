//! Import
const { DataTypes } = require("sequelize");

//! Injected Connection to Sequelize
module.exports = (database) => {
	database.define("Videogame", {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false,
			primaryKey: true,
			unique: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		released: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		rating: {
			type: DataTypes.FLOAT,
			allowNull: true,
		},
		platforms: {
			type: DataTypes.ARRAY(DataTypes.STRING),
			allowNull: false,
		},
		image:{
			type: DataTypes.STRING,
			allowNull: false,
		},
	});
};
