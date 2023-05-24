//! Import
const express = require("express");
const router = express.Router();

//! Controllers
const {
	getAllGames,
	getGamesByName,
	createGame,
	getGamesById,
	getAllGenres,
	deleteGame,
	updateGame,
} = require("../controllers/index");

//! Get all genres
router.get("/genres", getAllGenres);

//! Get All
router.get("/", getAllGames);

//! Search Game Name
router.get("/search", getGamesByName);

//! Get Games ID
router.get("/:idVideogame", getGamesById);

//! Post
router.post("/post", createGame);

//! Delete Game
router.delete("/:id", deleteGame);

//! Update Game
router.put("/:id", updateGame);
module.exports = router;
