//! Import
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

//! Utils
import { filterGenre, getAllGenres } from "../../redux/actions";

//! Componnents
import Genres from "../Genres/Genres";
import Cards from "../Cards/Cards";
import style from "../DetailGenres/DetailGenres.module.css";
import { useEffect } from "react";

const DetailGenres = () => {
	const dispatch = useDispatch();
	//! Global State
	const { games, isOpen, allGenres } = useSelector((state) => ({
		games: state.games,
		isOpen: state.toglleMenu,
		allGenres: state.allGenres,
	}));

	// consigo la query y filtrar por genero.
	const location = useLocation();
	const genre = location.search.split("=")[1];

	useEffect(() => {
		dispatch(filterGenre(genre));
	}, [dispatch, genre]);

	return (
		<div className={style.conteinerPrincipal}>
			<div className={style.conteiner}>
				<Genres />
				<Cards games={games} />
			</div>
		</div>
	);
};

export default DetailGenres;
