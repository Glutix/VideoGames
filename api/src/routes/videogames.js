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

const { filter, order } = require("../Utils/index");

//! Utils
router.post("/order", order);
router.get("/filter", filter);

//! Get All
router.get("/", getAllGames);

//! Search Game Name
router.get("/search", getGamesByName);

//! Post
router.post("/post", createGame);

//! Get Games ID
router.get("/:idVideogame", getGamesById);

module.exports = router;
