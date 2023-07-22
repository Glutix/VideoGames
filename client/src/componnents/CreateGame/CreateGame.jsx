//! imports
import React from "react";
import style from "./CreateGame.module.css";

//! Hooks
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//! Utils
import { createGame, getAllGenres } from "../../redux/actions";
import validate from "../Utils/validate";

const CreateGame = () => {
	const dispatch = useDispatch();

	const data = useSelector((state) => state.allGenres);
	const allGenres = data.filter((genre) => !genre.createdAt);

	useEffect(() => {
		dispatch(getAllGenres());
	}, [dispatch]);

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
			window.location.href = "http://localhost:5173/home";

			//reinicio el estado del boton
			setErrors({ isValid: false });
		} else {
			alert("Datos incompletos");
		}
	};

	return (
		<div className={style.conteinerPrincipal}>
			<h1 className={style.title}>Create Game</h1>
			<div className={style.conteiner}>
				<form className={style.form} onSubmit={handleSubmit}>
					<div className={style.conteinerCampus}>
						<label>Name: </label>
						<input
							type="text"
							name="name"
							placeholder="name"
							value={gameData.name}
							onChange={handleChange}
							className={style.inputs}
						></input>
						<p className={style.errors}>{errors.name}</p>
					</div>

					<div className={style.conteinerCampus}>
						<label>Image: </label>
						<input
							type="text"
							name="image"
							placeholder="URL"
							value={gameData.image}
							onChange={handleChange}
							className={style.inputs}
						/>
						<p className={style.errors}>{errors.image}</p>
					</div>

					<div className={style.conteinerSection}>
						<div className={style.subCampus}>
							<h3 className={style.subTitle}>Genres</h3>
							<p className={style.errors}>{errors.genres}</p>
						</div>
						<section className={style.section}>
							{allGenres.map((genre) => (
								<div key={genre.name} className={style.conteinCheck}>
									<label>
										<input
											type="checkbox"
											name="genres"
											value={genre.name}
											checked={gameData.genres.includes(genre.name)}
											onChange={handleValue}
										/>
										{genre.name}
									</label>
								</div>
							))}
						</section>
					</div>

					<div className={style.conteinerSection}>
						<div className={style.subCampus}>
							<h3 className={style.subTitle}>Platforms</h3>
							<p className={style.errors}>{errors.platforms}</p>
						</div>
						<section className={style.section}>
							{["Pc", "Xbox", "Playstation", "Nintendo", "Sega", "Steam"].map(
								(platform) => (
									<div key={platform} className={style.conteinCheck}>
										<label>
											<input
												type="checkbox"
												name="platforms"
												value={platform}
												checked={gameData.platforms.includes(platform)}
												onChange={handleValue}
											/>
											{platform}
										</label>
									</div>
								)
							)}
						</section>
					</div>

					<div className={style.subCampus}>
						<label>
							<h3 className={style.subTitle}>Released:</h3>
						</label>
						<input
							type="date"
							name="released"
							value={gameData.released}
							onChange={handleChange}
							className={style.released}
						/>
					</div>

					<div className={style.rating}>
						<label>
							<h3 className={style.subTitle}>Rating:</h3>
						</label>
						<div>
							<input
								name="rating"
								type="range"
								min="1"
								max="5"
								step="0.1"
								value={gameData.rating}
								onChange={handleChange}
								className={style.slider}
							/>
						</div>
						<div className="score">
							{parseFloat(gameData.rating).toFixed(1)}
						</div>
					</div>

					<div className={style.subCampus}>
						<label>
							<h3 className={style.subTitle}>Description:</h3>
						</label>
						<p className={style.errors}>{errors.description}</p>
					</div>

					<textarea
						name="description"
						cols="30"
						rows="10"
						value={gameData.description}
						onChange={handleChange}
						maxLength="500"
						placeholder="Typing a description for your game"
						className={style.texarea}
					></textarea>
					<div className={style.countChar}>
						{gameData.description.length}/500
					</div>

					<button
						className={`${errors.isValid ? style.btn : style.btnDisable}`}
						type="submit"
						disabled={!errors.isValid}
					>
						Sumbit
					</button>
				</form>
			</div>
		</div>
	);
};

export default CreateGame;
