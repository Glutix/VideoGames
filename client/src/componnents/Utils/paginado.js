const paginado = (page, size, element) => {
	const startIndex = (page - 1) * size;
	const endIndex = page * size;

	return element.slice(startIndex, endIndex);
};

export default paginado;
