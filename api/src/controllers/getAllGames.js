//! Utils
const axios = require("axios");
require("dotenv").config();
const { Videogame, Genre } = require("../db");

//! Const
const URL = process.env.API;
const KEY = process.env.API_KEY;

//! Get All Games DB
const getAllGamesDB = async () => {
	try {
		//* recupero todos los datos incluyendo al modelo genres
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
const getAllGamesAPI = async (page = 1) => {
	try {
		const promises = [];

		for (let i = 1; i <= +page; i++) {
			let promise = axios.get(`${URL}games?key=${KEY}&page=${i}`);
			promises.push(promise);
		}

		//* Hago peticiones hasta el numero de paginada indicado
		const response = await Promise.allSettled(promises);

		const data = response.map((promise) => {
			//* Si se resolvio la promesa
			if (promise.status === "fulfilled") {
				//* recupero la info que me interesan
				return promise.value.data.results.map((game) => ({
					id: game.id,
					name: game.name,
					image: game.background_image,
					platforms: game.platforms.map((item) => item.platform?.name).sort(),
					released: game.released,
					rating: game.rating,
					genres: game.genres.map((item) => item.name).sort(),
				}));
			}
		});

		//* flat convierte un array de arrays, a un array plano
		return { responseAPI: data.flat() };
	} catch (error) {
		return { error: error.message };
	}
};

//! Get All
const getAllGames = async (req, res) => {
	try {
		const { page } = req.query;

		//* Hago las peticiones
		const { responseDB } = await getAllGamesDB();
		const { responseAPI } = await getAllGamesAPI(page);

		if (!responseAPI) throw new Error("Not found");

		//* almaceno las 2 peticiones en un array
		const response = [...responseDB, ...responseAPI];

		return res.status(200).json(response);
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

module.exports = { getAllGames, getAllGamesAPI, getAllGamesDB };
