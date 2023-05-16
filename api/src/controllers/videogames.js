//! Import
const axios = require("axios");
require("dotenv").config();
const { Videogame, Genre } = require("../db");
const { Op } = require("sequelize");

//! Const
const URL = process.env.API;
const KEY = process.env.API_KEY;

//! Get All
const getAllGames = async (req, res) => {
	try {
		const { data } = await axios.get(`${URL}games?key=${KEY}`);
		if (!data) throw new Error("bad request");

		const responseDB = await Videogame.findAll({
			//de todos los usuarios que trae
			include: {
				model: Genre,
				as: "genres", //incluye al modelo genre
				attributes: ["name"],
				through: {
					attributes: [], //excluye la relacion con la tabla intermedia
				},
			},
		});

		const results = [...responseDB, ...data.results];

		const response = results.map((game) => {
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

//! Get Id
const getIdGames = async (req, res) => {
	try {
		const { idVideogame } = req.params;
		const { data } = await axios.get(`${URL}games/${idVideogame}?key=${KEY}`);
		if (!data.id) throw new Error("No existe id");

		const game = {
			id: idVideogame,
			name: data.name,
			image: data.background_image,
			platforms: data.platforms.map((item) => item.platform.name).sort(),
			description: data.description_raw,
			released: data.released,
			rating: data.rating,
			genres: data.genres.map((item) => item.name).sort(),
		};
		return res.status(200).json(game);
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

//! Get Name
const getNameGames = async (req, res) => {
	try {
		const { name } = req.query;
		const { data } = await axios.get(`${URL}games?search=${name}&key=${KEY}`);
		const responseDB = await Videogame.findAll({
			where: { name: { [Op.iLike]: `%${name}%` } },
			include: {
				as: "genres",
				model: Genre,
			},
		});

		if (!data.results.length && !responseDB.length) {
			throw new Error("No existe el game");
		}

		const responseApi = data.results.slice(0, 15).map((game) => {
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
		const response = link.slice(0, 15);

		return res.status(200).json(response);
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

//! Post Game
const postGame = async (req, res) => {
	try {
		const { name, description, platforms, image, released, rating } = req.body;

		if (!name || !description || !platforms || !image || !released || !rating) {
			throw new Error("Datos incompletos");
		}

		const game = {
			name,
			image,
			platforms,
			released,
			rating,
			description,
		};

		const gameFound = await Videogame.findOne({ where: { name: `${name}` } });
		if (gameFound) throw new Error("Ya existe un juego con este nombre");

		const results = await Videogame.create(game);
		return res.status(201).json(results);
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};


module.exports = { getAllGames, getIdGames, getNameGames, postGame };
