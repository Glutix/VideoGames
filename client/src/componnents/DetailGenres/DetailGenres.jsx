//! Import
import { getAllGenres } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

//! Hooks
import { useEffect } from "react";

//! Utils
import filterGenre from "../Utils/filterGenre";

//! Componnents
import Genres from "../Genres/Genres";
import Cards from "../Cards/Cards";
import style from "../DetailGenres/DetailGenres.module.css";

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
	const name = location.search.split("=")[1];
	const arrayId = filterGenre(allGenres, name);

	const gamesFound = games.filter((game) => arrayId.includes(game.id));

	useEffect(() => {
		dispatch(getAllGenres());
	}, [dispatch]);

	return (
		<div className={style.conteinerPrincipal}>
			<div className={style.conteiner}>
				<Genres />
				<Cards games={gamesFound} />
			</div>
		</div>
	);
};

export default DetailGenres;
