import React from "react";
import style from "./Order.module.css";
import { useDispatch, useSelector } from "react-redux";
import { orderApi } from "../../redux/actions";

const Order = () => {
	const dispatch = useDispatch();
	const stateFilter = useSelector((state) => state.stateFilter);

	//? esto queda asi
	let handleChange = () => {};

	//? (Luego modificar la condicion del if)
	if (stateFilter === "database") {
		dispatch(orderDB())
	}

	//? si no, ordeno por api o all
	handleChange = (event) => {
		const value = event.target.value;
		dispatch(orderApi(value));
	};

	return (
		<div className={style.conteiner}>
			<h3>Order: </h3>
			<select className={style.select} onChange={handleChange}>
				<option selected="Order By" disabled="disabled">
					Order By
				</option>
				<option value="ascendente">Ascendente</option>
				<option value="descendente">Descendente</option>
			</select>
		</div>
	);
};

export default Order;
