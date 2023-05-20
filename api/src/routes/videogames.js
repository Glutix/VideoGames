//! Import
const express = require("express");
const router = express.Router();

//! Controllers
const {
	getAllGames,
	getGamesByName,
	createGame,
	getGamesById,
} = require("../controllers/index");

//! Get All
router.get("/", getAllGames);

//! Search Game Name
router.get("/search", getGamesByName);

//! Get Games ID
router.get("/:idVideogame", getGamesById);

//! Post
router.post("/post", createGame);


module.exports = router;
