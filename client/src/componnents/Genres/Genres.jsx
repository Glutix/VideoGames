//! Imports
import React from "react";
import { Link } from "react-router-dom";
import { getAllGenres } from "../../redux/actions";
import style from "../Genres/Genres.module.css";
//! Hooks
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Genres = () => {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.allGenres);

	//Recupero solo datos que me interesan
	const allGenres = data.filter(
		(genre) =>
			[
				"Action",
				"Strategy",
				"RPG",
				"Shooter",
				"Adventure",
				"Puzzle",
				"Racing",
				"Sports",
			].includes(genre.name) && genre.image_background
	);

	useEffect(() => {
		dispatch(getAllGenres());
	}, [dispatch]);

	return (
		<div className={style.conteiner}>
			<h3 className={style.title}>Genres</h3>
			<div className={style.conteinerItems}>
				{allGenres.map((genre, index) => {
					return (
						<div className={style.items} key={index}>
							<img
								className={style.img}
								src={genre.image_background}
								alt={genre.name}
							/>
							<Link className={style.link} to={`/genres?genre=${genre.name}`}>
								{genre.name}
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Genres;
