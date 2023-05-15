import React from "react";
import Card from "../Card/Card";
import style from "./Cards.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideoGames } from "../../redux/actions";

const Cards = () => {
	const dispatch = useDispatch();

	const { games, isOpen } = useSelector((state) => ({
		games: state.games,
		isOpen: state.toglleMenu,
	}));

	useEffect(() => {
		dispatch(getVideoGames());
	}, [dispatch]);

	console.log(isOpen);

	return (
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
	);
};

export default Cards;
