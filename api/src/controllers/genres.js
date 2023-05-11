//! Import
require("dotenv").config();
const axios = require("axios");

//! Const
const URL = process.env.API;
const KEY = process.env.API_KEY;

//! Get Genres
const allGenres = async (req, res) => {
	try {
		const { data } = await axios(`${URL}genres?key=${KEY}`);
		const response = data.results.map((genre) => {
			const list = {
				id: genre.id,
				name: genre.name,
				image: genre.image_background,
				games: genre.games.map((game) => game.name),
			};
			return list;
		});

		return res.status(200).json(response);
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

module.exports = { allGenres };
