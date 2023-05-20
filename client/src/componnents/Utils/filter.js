import { validate } from "uuid";

const filter = (name, array) => {
	if (name === "all") {
		const games = [...array];
		return games;
	}

	if (name === "database") {
		const games = array.filter((game) => validate(game.id));
		return games;
	}

	if (name === "api") {
		const games = array.filter((game) => !validate(game.id));
		return games;
	}
};

export default filter;
