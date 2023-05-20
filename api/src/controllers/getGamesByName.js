//! Utils
const axios = require("axios");
require("dotenv").config();

const { Videogame, Genre } = require("../db");
const { Op } = require("sequelize");

//! Const
const URL = process.env.API;
const KEY = process.env.API_KEY;

//! Get Name
const getGamesByName = async (req, res) => {
	try {
		const { name } = req.query;

		const { data } = await axios.get(`${URL}games?key=${KEY}&search=${name}`);

		const responseDB = await Videogame.findAll({
			where: { name: { [Op.iLike]: `%${name}%` } },
			include: { model: Genre, as: "genres" },
		});

		if (!data.results.length && !responseDB.length) {
			throw new Error("No existe el game");
		}

		const responseApi = data.results.slice(0, 16).map((game) => {
			const games = {
				id: game.id,
				name: game.name,
				image: game.background_image,
				platforms: game.platforms.map((item) => item.platform.name).sort(),
				released: game.released,
				rating: game.rating,
				genres: game.genres.map((item) => item.name).sort(),
			};
			return games;
		});

		const link = [...responseDB, ...responseApi];
		const response = link.slice(0, 16);

		return res.status(200).json(response);
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

module.exports = { getGamesByName };
