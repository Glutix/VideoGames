//! Imports
const { getAllGames, getAllGamesAPI, getAllGamesDB } = require("./getAllGames");
const { getGamesById } = require("./getGamesById");
const { getGamesByName } = require("./getGamesByName");
const { createGame } = require("./CreateGame");

const { getAllGenres } = require("./getGenres");

//! All exports
module.exports = {
	getGamesByName,
	getGamesById,
	getAllGames,
	getAllGamesAPI,
	getAllGamesDB,
	createGame,
	getAllGenres,
};
