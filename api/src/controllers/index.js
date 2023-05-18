//! Imports
const { getAllGames, getAllGamesAPI, getAllGamesDB } = require("./getAllGames");
const { getGamesById } = require("./getGamesById");
const { getGamesByName } = require("./getGamesByName");
const { createGame } = require("./CreateGame");

//! All exports
module.exports = {
	getGamesByName,
	getGamesById,
	getAllGames,
	getAllGamesAPI,
	getAllGamesDB,
	createGame,
};
