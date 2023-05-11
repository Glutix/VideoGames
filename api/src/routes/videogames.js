//! Import
const express = require("express");
const router = express.Router();

//! Controllers
const {
	getAllGames,
	getIdGames,
	getNameGames,
	postGame,
} = require("../controllers/videogames");

//! Get
router.get("/", getAllGames);
router.get("/search", getNameGames);
router.get("/:idVideogame", getIdGames);

//! Post
router.post("/post", postGame);

module.exports = router;
