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

//! Post
router.post("/post", createGame);

//! Get Games ID
router.get("/:idVideogame", getGamesById);

//!           <<< --- Utils --- >>>
const { filter, order } = require("../Utils/index");

//? Filter
router.get("/filter", filter);

//? Order
router.post("/order", order);

module.exports = router;
