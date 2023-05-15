import React from "react";
import Card from "../Card/Card";
import style from "./Cards.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getVideoGames } from "../../redux/actions";

const Cards = ({ games, isOpen }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		if (!games.length) dispatch(getVideoGames());
	}, [games]);

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
