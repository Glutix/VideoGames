import React from "react";
import Card from "../Card/Card";
import style from "./Cards.module.css";
import Filters from "../Filters/Filters";
import Order from "../Order/Order";
import Pages from "../Pages/Pages";

const Cards = ({ games }) => {
	return (
		<div className={style.conteiner}>
			<section className={style.section}>
				<Filters />
				<Order games={games} />
			</section>
			<div className={`${style.conteinerCards}`}>
				{games?.map((game) => {
					//* por cada game validar si la imagen es valida
					const isValidImage = game.image && game.image.trim() !== "";
					return (
						//* Si valida renderizo
						isValidImage && (
							<Card
								key={game.id}
								id={game.id}
								name={game.name}
								image={game.image}
								rating={game.rating}
								genres = {game.genres}
								platforms= {game.platforms}
							/>
						)
					);
				})}
			</div>
			<Pages />
		</div>
	);
};

export default Cards;
