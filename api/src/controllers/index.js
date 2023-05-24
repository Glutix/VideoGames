//! Imports
const { getAllGames, getAllGamesAPI, getAllGamesDB } = require("./getAllGames");
const { getGamesById } = require("./getGamesById");
const { getGamesByName } = require("./getGamesByName");
const { createGame } = require("./createGame");
const { getAllGenres } = require("./getGenres");
const { deleteGame } = require("./deleteGame");
const { updateGame } = require("./updateGame");

//! All exports
module.exports = {
	getGamesByName,
	getGamesById,
	getAllGames,
	getAllGamesAPI,
	getAllGamesDB,
	createGame,
	getAllGenres,
	deleteGame,
	updateGame,
};
