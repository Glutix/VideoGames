import React from "react";
import { useState } from "react";

const FilterGenres = () => {
	const allGenres = [
		"action",
		"indie",
		"adventure",
		"rpg",
		"strategy",
		"shooter",
		"casual",
		"arcade",
		"racing",
		"fantasy",
	];

	const [selectedGenres, setSelectedGenres] = useState([]);

	const handleChange = (event) => {
		const genre = event.target.value;

		selectedGenres.includes(genre) //pregunto si existe el genero
			? setSelectedGenres([...selectedGenres.filter((item) => item !== genre)]) //si existe lo elimino
			: setSelectedGenres([...selectedGenres, genre]); //si no existe lo agrego
	};

	const handleSubmit = (event) => {
		event.preventDefault();
	};


	return (
		<div>
			<h3>Genres</h3>
			<form onSubmit={handleSubmit}>
				{allGenres.map((genre) => (
					<label htmlFor={genre} key={genre}>
						<input
							id={genre} // Esto vincula el input con el htmlfor del label
							type="checkbox"
							name="genres"
							value={genre} //establece el value del elemento que se envia por event
							checked={selectedGenres.includes(genre)}
							onChange={handleChange}
						/>
						{genre.charAt(0).toUpperCase() + genre.slice(1)}
					</label>
				))}

				<button type="submit">Apply</button>
			</form>
		</div>
	);
};

export default FilterGenres;
