const { getAllGamesAPI, getAllGamesDB } = require("../controllers/index");

//! FilterAPI
const filter = async (req, res) => {
	try {
		const { name } = req.query;

		//* si no tengo query
		if (!name) throw new Error("Faltan parametros");

		//* si la query es api

		if (name.toLowerCase() === "api") {
			const { responseAPI } = await getAllGamesAPI();
			if (!responseAPI.length) throw new Error("La api esta vacia");

			return res.status(200).json(responseAPI);
		}

		//* si la query es database
		const { responseDB } = await getAllGamesDB();
		if (name.toLowerCase() === "database") {
			if (!responseDB.length) throw new Error("La database esta vacia");
			return res.status(200).json(responseDB);
		}
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

module.exports = { filter };
