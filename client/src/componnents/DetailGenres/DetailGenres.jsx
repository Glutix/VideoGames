//! Import
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

//! Utils
import { filterGenre, handleStateFilter } from "../../redux/actions";
import paginado from "../Utils/paginado";

//! Componnents
import Genres from "../Genres/Genres";
import Cards from "../Cards/Cards";
import style from "../DetailGenres/DetailGenres.module.css";

const DetailGenres = () => {
	const dispatch = useDispatch();
	//! Global State
	const { games, page, stateFilter, allGames } = useSelector((state) => ({
		games: state.games,
		allGames: state.allGames,
		page: state.page,
		stateFilter: state.stateFilter,
	}));

	// consigo la query y filtrar por genero.

	useEffect(() => {
		dispatch(filterGenre(stateFilter));
	}, [stateFilter, allGames]);

	//* controlador de elementos a renderizar
	const gamesPages = paginado(page, 16, games);

	return (
		<div className={style.conteinerPrincipal}>
			<div className={style.conteiner}>
				<Genres />
				<Cards games={gamesPages} />
			</div>
		</div>
	);
};

export default DetailGenres;
