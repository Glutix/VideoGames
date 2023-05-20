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
		const genre = event.target.value;
		setGameData((prevData) => ({
			...prevData,
			genres: prevData.genres.includes(genre)
				? prevData.genres.filter((g) => g !== genre)
				: [...prevData.genres, genre],
		}));
	};

	const handlePlatforms = (event) => {
		const platform = event.target.value;
		setGameData((prevData) => ({
			...prevData,
			platforms: prevData.platforms.includes(platform)
				? prevData.platforms.filter((p) => p !== platform)
				: [...prevData.platforms, platform],
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
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
						{[
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
						].map((genre) => (
							<label key={genre}>
								<input
									type="checkbox"
									name="genres"
									value={genre}
									checked={gameData.genres.includes(genre)}
									onChange={handleGenres}
								/>
								{genre.charAt(0).toUpperCase() + genre.slice(1)}
							</label>
						))}
					</section>

					<h3>Platforms</h3>
					<section>
						{["pc", "xbox", "playstation", "nintendo", "sega"].map(
							(platform) => (
								<label key={platform}>
									<input
										type="checkbox"
										name="platforms"
										value={platform}
										checked={gameData.platforms.includes(platform)}
										onChange={handlePlatforms}
									/>
									{platform.charAt(0).toUpperCase() + platform.slice(1)}
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
					<input
						type="text"
						name="rating"
						value={gameData.rating}
						onChange={handleChange}
					/>

					<label>Description: </label>
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
