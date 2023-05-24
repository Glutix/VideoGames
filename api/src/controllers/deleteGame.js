require("dotenv").config();
const { Videogame } = require("../db");
const { validate } = require("uuid");

const deleteGame = async (req, res) => {
	try {
		const { id } = req.params;

		//* Valido el id.
		const IsValid = validate(id);
		const results = await Videogame.findOne({ where: { id: id } });
		if (!IsValid || !results) throw new Error("No existe este id");

		//* Elimino el juego de la db
		Videogame.destroy({ where: { id: id } });

		return res.status(200).json({ response: "Juego eliminado correctamente." });
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

module.exports = { deleteGame };
