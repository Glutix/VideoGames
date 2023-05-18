import React from "react";
import Card from "../Card/Card";
import style from "./Cards.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideoGames } from "../../redux/actions";
import Filters from "../Filters/Filters";
import Order from "../Order/Order";

const Cards = () => {
	//! Global State
	const { games, isOpen } = useSelector((state) => ({
		games: state.games,
		isOpen: state.toglleMenu,
	}));

	const dispatch = useDispatch();

	useEffect(() => {
		if (!games.length) dispatch(getVideoGames());
	}, [games]);

	return (
		<div className={style.conteinerPRO}>
			<section className={style.section}>
				<Filters />
				<Order />
			</section>
			<div className={`${style.conteiner} ${isOpen && style.isOpenOn}`}>
				{games.map((game) => {
					return (
						<Card
							key={game.id}
							id={game.id}
							name={game.name}
							image={game.image}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Cards;
