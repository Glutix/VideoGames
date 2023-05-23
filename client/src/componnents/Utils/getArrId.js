const getArrId = (array, name) => {
	const results = array
		.filter((genre) => genre.name === name)
		.map((item) => item.games);
	return results.flat().map((element) => element.id);
};

export default getArrId;
