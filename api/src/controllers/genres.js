//! Import
require("dotenv").config();
const axios = require("axios");
const { Genre } = require("../db");

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
				games: genre.games.map((game) => game.name),
			};
			return list;
		});

		return res.status(200).json(response);
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

//! Post gender
const postGender = async (req, res) => {
	try {
		const { name, games } = req.body;
		if (!name || !games) throw new Error("datos incompletos");

		const newGenre = await Genre.create({ name });

		await newGenre.addGames(games);

		return res.status(201).json(newGenre);
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

module.exports = { allGenres, postGender };
