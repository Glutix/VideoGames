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
	const allGenres = useSelector((state) => state.allGenres);

	useEffect(() => {
		dispatch(getAllGenres());
	}, [dispatch]);

	return (
		<div className={style.conteiner}>
			<h1>Genres</h1>
			<div className={style.conteinerItems}>
				{allGenres.map((genre) => {
					return (
						<Link key={genre.name} to={`/genres?genre=${genre.name}`}>
							{genre.name}
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Genres;
