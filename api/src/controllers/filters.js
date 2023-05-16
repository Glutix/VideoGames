//! import
const axios = require("axios");
require("dotenv").config();

//! Const
const URL = process.env.API;
const KEY = process.env.API_KEY;

//! FilterAPI
const filterApi = async (req, res) => {
	try {
		const { data } = await axios.get(`${URL}games?key=${KEY}`);
		if (!data.results) throw new Error("bad request");

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

		return res.status(200).json(response);
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

/* const orderApi = async (req, res) => {
	try {
		const { data } = await axios.get(`${URL}games?key=${KEY}`);
		if (!data.results) throw new Error("bad request");

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

    response


		return res.status(200).json(response);
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};
 */

module.exports = { filterApi };
