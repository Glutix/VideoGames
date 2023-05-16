import React from "react";
import style from "./CreateGame.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createGame } from "../../redux/actions";

const CreateGame = () => {
	//! Hooks
	const dispatch = useDispatch();

	//! Local States
	const [gameData, setGameData] = useState({
		name: "",
		image: "",
		genres: [],
		platforms: [],
		released: "",
		rating: "",
		description: "",
	});

	const [stateGenres, setStateGenres] = useState({
		action: false,
		indie: false,
		adventure: false,
		rpg: false,
		strategy: false,
		shooter: false,
		casual: false,
		arcade: false,
		racing: false,
		fantasy: false,
	});

	const [statePlatforms, setStatePlatforms] = useState({
		pc: false,
		xbox: false,
		playstation: false,
		nintendo: false,
		sega: false,
	});

	//! Handlers
	const handleChange = (event) => {
		const campoActual = event.target.name;
		const valorActual = event.target.value;
		setGameData({
			...gameData,
			[campoActual]: valorActual,
		});
	};

	const handleGenres = (event) => {
		event.preventDefault();
		//recupero el elemento al que se le hizo click
		const element = event.target.innerText;

		//lo hago minisculas para poder comprar con el state de btn
		const campoActual = element.toLowerCase();
		setStateGenres({
			...stateGenres,
			[campoActual]: !stateGenres[campoActual],
		});
	};

	const handlePlatforms = (event) => {
		event.preventDefault();
		//recupero el elemento al que se le hizo click
		const element = event.target.innerText;

		//lo hago minisculas para poder comprar con el state de btn
		const campoActual = element.toLowerCase();
		setStatePlatforms({
			...statePlatforms,
			[campoActual]: !statePlatforms[campoActual],
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const genres = Object.entries(stateGenres) //obtengo un array que dentro arrays con [key, value]
			.filter(([_key, value]) => value === true) //filtro y hago destructurin de los [key, value] y me quedo con los que value coincidan con true
			.map(([key, _value]) => key); //me quedo solamente con los key

		const platforms = Object.entries(statePlatforms)
			.filter(([_key, value]) => value === true)
			.map(([key, _value]) => key);

		setGameData({
			...gameData,
			genres: genres,
			platforms: platforms,
		});

		dispatch(createGame(gameData));
	};

	return (
		<div className={style.conteinerDad}>
			<h1>Create Game</h1>
			<div className={style.conteiner}>
				<form className={style.form} onSubmit={handleSubmit}>
					<label>Nombre: </label>
					<input
						type="text"
						name="name"
						placeholder="name"
						value={gameData.name}
						onChange={handleChange}
					></input>

					<label>Image: </label>
					<input
						type="text"
						name="image"
						placeholder="URL"
						value={gameData.image}
						onChange={handleChange}
					/>

					<h3>Genres</h3>
					<section>
						{Object.keys(stateGenres).map((genre) => (
							<button key={genre} onClick={handleGenres}>
								{genre.charAt(0).toUpperCase() + genre.slice(1)}
							</button>
						))}
					</section>

					<h3>Platforms</h3>
					<section>
						{Object.keys(statePlatforms).map((platform) => (
							<button key={platform} onClick={handlePlatforms}>
								{platform.charAt(0).toUpperCase() + platform.slice(1)}
							</button>
						))}
					</section>

					<label>Released: </label>
					<input
						type="date"
						name="released"
						value={gameData.released}
						onChange={handleChange}
					/>

					<label>rating: </label>
					<input
						type="text"
						name="rating"
						value={gameData.rating}
						onChange={handleChange}
					/>

					<label>description: </label>
					<textarea
						name="description"
						cols="30"
						rows="10"
						value={gameData.description}
						onChange={handleChange}
					></textarea>

					<button type="submit">Sumbit</button>
				</form>
			</div>
		</div>
	);
};

export default CreateGame;
