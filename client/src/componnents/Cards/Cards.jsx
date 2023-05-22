import React, { useEffect } from "react";
import Card from "../Card/Card";
import style from "./Cards.module.css";

//! Hooks
import { useSelector, useDispatch } from "react-redux";

//! Utils
import { getVideoGames } from "../../redux/actions";
import paginado from "../Utils/paginado";

//!components
import Filters from "../Filters/Filters";
import Order from "../Order/Order";
import Pages from "../Pages/Pages";
import Genres from "../Genres/Genres";

const Cards = () => {
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
				<section className={style.section}>
					<Filters />
					<Order />
				</section>
				<div className={`${style.conteinerCards} ${isOpen && style.isOpenOn}`}>
					{gamesPages?.map((game) => {
						return (
							<Card
								key={game.id}
								id={game.id}
								name={game.name}
								image={game.image}
								rating={game.rating}
							/>
						);
					})}
				</div>
				<Pages />
			</div>
		</div>
	);
};

export default Cards;
