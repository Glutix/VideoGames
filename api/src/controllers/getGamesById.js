//! Utils
const axios = require("axios");
require("dotenv").config();
const { validate } = require("uuid");
const { Videogame, Genre } = require("../db");

//! Const
const URL = process.env.API;
const KEY = process.env.API_KEY;

//! Get Id (Api/db)
const getGamesById = async (req, res) => {
	try {
		const { idVideogame } = req.params;

		const isValido = validate(idVideogame);

		if (isValido) {
			const data = await Videogame.findOne({
				where: { id: idVideogame },
				include: { model: Genre, as: "genres" },
			});

			if (!data.id) throw new Error("No existe un juego con este id");

			const game = {
				id: idVideogame,
				name: data.name,
				image: data.image,
				description: data.description,
				released: data.released,
				rating: data.rating,
				platforms: data.platforms.sort().join(" "),
				genres: data.genres
					.map((item) => item.name)
					.sort()
					.join(" "),
			};

			return res.status(200).json(game);
		}

		const { data } = await axios.get(`${URL}games/${idVideogame}?key=${KEY}`);

		if (!data.id) throw new Error("No existe un juego con este id");

		const game = {
			id: idVideogame,
			name: data.name,
			image: data.background_image,
			platforms: data.platforms
				.map((item) => item.platform.name)
				.sort()
				.join(" "),
			description: data.description_raw,
			released: data.released,
			rating: data.rating,
			genres: data.genres
				.map((item) => item.name)
				.sort()
				.join(" "),
		};
		return res.status(200).json(game);
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

module.exports = { getGamesById };
