import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ id, name, image, rating }) => {
	return (
		<div className={style.conteiner}>
			<h2 className={style.name}>{name}</h2>
			<Link to={`/detail/${id}`}>
				<img className={style.img} src={image} alt={name} />
			</Link>
			<h2>{rating}</h2>
		</div>
	);
};

export default Card;
