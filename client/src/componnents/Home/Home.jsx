import React, { useEffect } from "react";
import style from "./Home.module.css";
import Cards from "../Cards/Cards";

//! Hooks
import { useSelector, useDispatch } from "react-redux";

//! Utils
import { getVideoGames } from "../../redux/actions";
import paginado from "../Utils/paginado";

//!components
import Genres from "../Genres/Genres";

const Home = () => {
	const dispatch = useDispatch();
	//! Global State
	const { page, games, isOpen } = useSelector((state) => ({
		games: state.games,
		isOpen: state.toglleMenu,
		page: state.page,
	}));

	useEffect(() => {
		dispatch(getVideoGames(6));
	}, [dispatch]);

	//* controlador de elementos a renderizar
	const gamesPages = paginado(page, 16, games);

	return (
		<div className={style.conteinerPrincipal}>
			<Genres />
			<div className={style.conteiner}>
				<Cards games={gamesPages} />
			</div>
		</div>
	);
};

export default Home;
