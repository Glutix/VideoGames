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
} = require("../controllers/index");

router.get("/genres", getAllGenres);

//! Get All
router.get("/", getAllGames);

//! Search Game Name
router.get("/search", getGamesByName);

//! Get Games ID
router.get("/:idVideogame", getGamesById);

//! Post
router.post("/post", createGame);

module.exports = router;
