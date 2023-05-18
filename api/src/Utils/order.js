//! Order
const order = async (req, res) => {
	try {
		const { name } = req.query;
		const data = req.body;

		// si no recibo una query
		if (!name) throw new Error("Not query");

		//si no recibo un objeto
		if (!data) throw new Error("Faltan datos");

		if (name.toLowerCase() === "ascendente") {
			const sortedData = data.sort((a, b) => a.name.localeCompare(b.name));
			return res.status(200).json(sortedData);
		}

		if (name.toLowerCase() === "descendente") {
			const sortedData = data.sort((a, b) => b.name.localeCompare(a.name));
			return res.status(200).json(sortedData);
		}

		// si la query no es correcta
		return res.status(200).json(data);
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

module.exports = { order };
