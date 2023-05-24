//! Utils
require("dotenv").config();
const { Videogame, Genre } = require("../db");

//! Post Game
const createGame = async (req, res) => {
	try {
		const { name, description, image, released, rating, genres, platforms } =
			req.body;

		if (
			!name ||
			!description ||
			!image ||
			!released ||
			!rating ||
			!genres ||
			!platforms
		) {
			throw new Error("Datos incompletos");
		}

		//* buscar si ya existe el juego
		const gameFound = await Videogame.findOne({
			where: { name: name },
		});

		if (gameFound) throw new Error("Ya existe un juego con este nombre");

		const game = {
			name,
			description,
			image,
			released,
			rating,
			platforms,
		};

		//* Si no existe lo creo
		const gameCreated = await Videogame.create(game);

		//* recorro el array de generos
		for (const genreName of genres) {
			//* Busco si existe el genero en la db
			const genre = await Genre.findOne({
				where: { name: genreName },
			});

			//* Si el genero no existe
			if (!genre) {
				//* Creo el nuevo genero
				const newGenre = await Genre.create({ name: genreName });

				//* Añadimos el nuevo género al videogame
				await gameCreated.addGenres(newGenre);
			} else {
				//* Si el género ya existe, lo añado al game
				await gameCreated.addGenres(genre);
			}
		}

		const response = {
			...gameCreated.dataValues,
			genres,
		};

		return res.status(201).json(response);
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

module.exports = { createGame };
