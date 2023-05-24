require("dotenv").config();
const { Videogame, Genre } = require("../db");
const { validate } = require("uuid");

const updateGame = async (req, res) => {
	try {
		const { id } = req.params;
		const updatedData = req.body;

		const IsValid = validate(id);
		const game = await Videogame.findByPk(id);
		if (!IsValid || !game) throw new Error("No existe el id");

		await game.update(updatedData);

		//* Actualizar los géneros asociados al videojuego
		if (updatedData.genres && Array.isArray(updatedData.genres)) {
			//* creo un array de genero
			const updatedGenres = [];

			//* recorre el array de genero
			for (const genreName of updatedData.genres) {
				const [genre, created] = await Genre.findOrCreate({
					where: { name: genreName },
				});
				updatedGenres.push(genre);
			}

			//* Setea todos los generos
			await game.setGenres(updatedGenres);
		}

		return res.status(200).json({ response: "Se actualizo correctamente" });
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

module.exports = { updateGame };
