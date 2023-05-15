import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ id, name, image }) => {
	return (
		<div className={style.conteiner}>
			<h2 className={style.name}>{name}</h2>
			<Link to={`/detail/${id}`}>
				<img className={style.img} src={image} alt={name} />
			</Link>
		</div>
	);
};

export default Card;
