//! Imports
import React from "react";
import { Link } from "react-router-dom";
import { getAllGenres, handleStateFilter } from "../../redux/actions";
import style from "../Genres/Genres.module.css";

//! Hooks
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Genres = () => {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.allGenres);
	const allGenres = data.filter((genre) => !genre.createdAt);

	useEffect(() => {
		dispatch(getAllGenres());
	}, [dispatch]);

	const handleClick = (event) => {
		const value = event.target.innerHTML;
		dispatch(handleStateFilter(value));
	};

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
							<Link onClick={handleClick} className={style.link} to="/genres">
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
