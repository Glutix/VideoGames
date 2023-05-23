/* const getArrId = (array, name) => {
	const results = array
		.filter((genre) => genre.name === name)
		.map((item) => item.games);
	return results.flat().map((element) => element.id);
}; */

const filterGamesGenre = (array, name) => {
	return array.filter((game) => game.genres.includes(name));
};

export default filterGamesGenre;
