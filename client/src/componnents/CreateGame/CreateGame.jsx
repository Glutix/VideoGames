//! imports
import React from "react";
import style from "./CreateGame.module.css";

//! Hooks
import { useState } from "react";
import { useDispatch } from "react-redux";

//! Utils
import { createGame } from "../../redux/actions";
import validate from "../Utils/validate";

const CreateGame = () => {
	const dispatch = useDispatch();

	//! Local States
	const [gameData, setGameData] = useState({
		name: "",
		image: "",
		genres: [],
		platforms: [],
		released: "",
		rating: 1,
		description: "",
	});

	const [errors, setErrors] = useState({});

	//! Handlers
	const handleChange = (event) => {
		const campoActual = event.target.name;
		const valorActual = event.target.value;

		setGameData({
			...gameData,
			[campoActual]: valorActual,
		});

		setErrors(
			validate({
				...gameData,
				[campoActual]: valorActual,
			})
		);
	};

	const handleValue = (event) => {
		const campoActual = event.target.name;
		const valorActual = event.target.value;

		setGameData({
			...gameData,
			[campoActual]: gameData[campoActual].includes(valorActual)
				? gameData[campoActual].filter((item) => item !== valorActual)
				: [...gameData[campoActual], valorActual],
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(createGame(gameData));

		//* Si no tengo errores
		if (errors.isValid) {
			//reinicio los campos
			setGameData({
				name: "",
				image: "",
				genres: [],
				platforms: [],
				released: "",
				rating: 1,
				description: "",
			});
			alert("Game created");

			//reinicio el estado del boton
			setErrors({ isValid: false });
		} else {
			alert("Datos incompletos");
		}
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
					<p>{errors.name}</p>

					<label>Image: </label>
					<input
						type="text"
						name="image"
						placeholder="URL"
						value={gameData.image}
						onChange={handleChange}
					/>
					<p>{errors.image}</p>

					<h3>Genres</h3>
					<p>{errors.genres}</p>
					<section>
						{[
							"Action",
							"Indie",
							"Adventure",
							"RPG",
							"Strategy",
							"Shooter",
							"Casual",
							"Arcade",
							"Racing",
							"Fantasy",
						].map((genre) => (
							<label key={genre}>
								<input
									type="checkbox"
									name="genres"
									value={genre}
									checked={gameData.genres.includes(genre)}
									onChange={handleValue}
								/>
								{genre}
							</label>
						))}
					</section>

					<h3>Platforms</h3>
					<p>{errors.platforms}</p>
					<section>
						{["Pc", "Xbox", "Playstation", "Nintendo", "Sega"].map(
							(platform) => (
								<label key={platform}>
									<input
										type="checkbox"
										name="platforms"
										value={platform}
										checked={gameData.platforms.includes(platform)}
										onChange={handleValue}
									/>
									{platform}
								</label>
							)
						)}
					</section>

					<label>Released: </label>
					<input
						type="date"
						name="released"
						value={gameData.released}
						onChange={handleChange}
					/>

					<label>Rating: </label>
					<div>
						<input
							name="rating"
							type="range"
							min="1"
							max="5"
							step="0.1"
							value={gameData.rating}
							onChange={handleChange}
							className="slider"
						/>
						<div className="score">
							{parseFloat(gameData.rating).toFixed(1)}
						</div>
					</div>

					<label>Description: </label>
					<p>{errors.description}</p>
					<textarea
						name="description"
						cols="30"
						rows="10"
						value={gameData.description}
						onChange={handleChange}
						maxLength="500"
					></textarea>
					<div>{gameData.description.length}/500</div>

					<button type="submit" disabled={!errors.isValid}>
						Sumbit
					</button>
				</form>
			</div>
		</div>
	);
};

export default CreateGame;
