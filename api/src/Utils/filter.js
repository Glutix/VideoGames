const { getAllGamesAPI, getAllGamesDB } = require("../controllers/index");

//! FilterAPI
const filter = async (req, res) => {
	try {
		const { name } = req.query;
		const { responseAPI } = await getAllGamesAPI();
		const { responseDB } = await getAllGamesDB();

		//* si no tengo query
		if (!name) throw new Error("Faltan parametros");

		//* si la query es api
		if (name.toLowerCase() === "api") {
			if (!responseAPI.length) throw new Error("La api esta vacia");

			return res.status(200).json(responseAPI);
		}

		//* si la query es database
		if (name.toLowerCase() === "database") {
			if (!responseDB.length) throw new Error("La database esta vacia");
			return res.status(200).json(responseDB);
		}
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

module.exports = { filter };
