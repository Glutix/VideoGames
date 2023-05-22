//! imports
import React from "react";
import style from "./CardsName.module.css";

//! Hooks
import { useSelector } from "react-redux";

//! componnents
import Cards from "../Cards/Cards";
import Genres from "../Genres/Genres";

const CardsName = () => {
	//! Global State
	const { games, isOpen } = useSelector((state) => ({
		games: state.games,
		isOpen: state.toglleMenu,
	}));

	return (
		<div className={style.conteinerPrincipal}>
			<div className={style.conteiner}>
				<Genres />
				<Cards games={games} />
			</div>
		</div>
	);
};

export default CardsName;
