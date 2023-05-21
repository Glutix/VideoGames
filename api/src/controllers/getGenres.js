//! Utils
const axios = require("axios");
require("dotenv").config();
const { Videogame, Genre } = require("../db");

//! Const
const URL = process.env.API;
const KEY = process.env.API_KEY;

const getGenresApi = async (req, res) => {
	try {
		const { data } = await axios.get(`${URL}genres?key=${KEY}`);
		const response = data.results;

		if (!response.length) throw new Error("bad request");

		return { responseAPI: response };
	} catch (error) {
		return { error: error.message };
	}
};

const getGenresDB = async () => {
	try {
		//* recupero todos los datos incluyendo al modelo genres
		const response = await Genre.findAll({
			include: { model: Videogame, as: "games", attributes: ["id", "name"] },
		});

		if (!response) throw new Error("No hay info en la db");

		return { responseDB: response };
	} catch (error) {
		return { error: error.message };
	}
};

const getAllGenres = async (req, res) => {
	try {
		const { responseAPI } = await getGenresApi();
		const { responseDB } = await getGenresDB();

		const response = [...responseDB, ...responseAPI];

		return res.status(200).json(response);
	} catch (error) {
		return res.status(404).json({ error: error.message });
	}
};

module.exports = { getAllGenres };
