//! Utils
const axios = require("axios");
require("dotenv").config();
const { Videogame, Genre } = require("../db");

//! Const
const URL = process.env.API;
const KEY = process.env.API_KEY;

//! Get All Games DB
const getAllGamesDB = async (req, res) => {
	try {
		const response = await Videogame.findAll({
			include: { model: Genre, as: "genres", attributes: ["id", "name"] },
		});

		if (!response) throw new Error("No hay info en la db");

		return { responseDB: response };
	} catch (error) {
		return { error: error.message };
	}
};

//! Get All Games Api
const getAllGamesAPI = async (req, res) => {
	try {
		const { data } = await axios.get(`${URL}games?key=${KEY}`);
		if (!data.results.length) throw new Error("bad request");

		const response = data.results.map((game) => {
			const games = {
				id: game.id,
				name: game.name,
				image: game.background_image,
				platforms: game.platforms.map((item) => item.platform?.name).sort(),
				released: game.released,
				rating: game.rating,
				genres: game.genres.map((item) => item.name).sort(),
			};
			return games;
		});

		return { responseAPI: response };
	} catch (error) {
		return { error: error.message };
	}
};

//! Get All
const getAllGames = async (req, res) => {
	try {
		const { responseDB } = await getAllGamesDB(req, res);
		const { responseAPI } = await getAllGamesAPI(req, res);

		const response = [...responseDB, ...responseAPI];
		if (!response.length) throw new Error("No hay datos");

		return res.status(200).json(response);
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

module.exports = { getAllGames, getAllGamesAPI, getAllGamesDB };
