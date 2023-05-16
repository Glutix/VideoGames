import React from "react";
import Card from "../Card/Card";
import style from "./CardsName.module.css";
import { useSelector } from "react-redux";

const CardsName = () => {
	//! Global State
	const { gamesByName, isOpen } = useSelector((state) => ({
		gamesByName: state.gamesByName,
		isOpen: state.toglleMenu,
	}));

	return (
		<div className={`${style.conteiner} ${isOpen && style.isOpenOn}`}>
			{gamesByName.map((game) => {
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

export default CardsName;
