import React from "react";
import style from "./Order.module.css";
import { useDispatch, useSelector } from "react-redux";
import { sorted } from "../../redux/actions";

const Order = () => {
	const dispatch = useDispatch();
	/* 	const games = useSelector((state) => state.games);
	 */
	const handleChange = (event) => {
		const name = event.target.value;
		dispatch(sorted(name));
	};

	return (
		<div className={style.conteiner}>
			<h3>Order: </h3>
			<select
				className={style.select}
				onChange={handleChange}
				defaultValue="Order By"
			>
				<option value="Order By" disabled="disabled">
					Order By
				</option>
				<option value="ascendente">Ascendente</option>
				<option value="descendente">Descendente</option>
				<option value="rating">Rating</option>
			</select>
		</div>
	);
};

export default Order;
