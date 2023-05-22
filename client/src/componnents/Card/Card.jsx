import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ id, name, image, rating }) => {
	return (
		<div className={style.conteiner}>
			<Link to={`/detail/${id}`}>
				<img className={style.img} src={image} alt={name} />
			</Link>
			<h2 className={style.name}>{name}</h2>
			<h3 className={style.rating}>{rating}</h3>
		</div>
	);
};

export default Card;
