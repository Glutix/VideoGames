const sorted = (order, array) => {
	if (order.toLowerCase() === "ascendente") {
		const sortedData = array.sort((a, b) => a.name.localeCompare(b.name));
		return sortedData;
	}

	if (order.toLowerCase() === "descendente") {
		const sortedData = array.sort((a, b) => b.name.localeCompare(a.name));
		return sortedData;
	}

	if (order.toLowerCase() === "rating") {
		const sortedData = array.sort((a, b) => b.rating - a.rating);
		return sortedData;
	}
};

export default sorted;
