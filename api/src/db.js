//! Import
require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const { videogames, genres } = require("./models/index");

//! Config
const database = new Sequelize(
	`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/videogames`,
	{
		logging: false,
		native: false,
	}
);

//! Execute Models
videogames(database);
genres(database);

//! Relations
//? En sequelize.models están todos los modelos importados como propiedades
//? Para relacionarlos hacemos un destructuring
const { Videogame, Genre } = database.models;
Videogame.belongsToMany(Genre, { through: "VideogameGenre" });
Genre.belongsToMany(Videogame, { through: "VideogameGenre" });

module.exports = {
	...database.models, // para poder importar los modelos ej: const { Product, User } = require('./db.js');
	conn: database, // para importar la conexión { conn } = require('./db.js');
};
