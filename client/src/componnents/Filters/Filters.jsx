import React from "react";
import style from "./Filters.module.css";
import { useDispatch } from "react-redux";
import {
	filterApi,
	filterDB,
	getVideoGames,
	handleStateFilter,
} from "../../redux/actions";

const Filters = () => {
	const dispatch = useDispatch();

	const handleChange = (event) => {
		const value = event.target.value;

		if (value === "api") {
			dispatch(handleStateFilter(value));
			dispatch(filterApi());
		}

		if (value === "database") {
			dispatch(handleStateFilter(value));
			dispatch(filterDB());
		}

		if (value === "all") {
			dispatch(handleStateFilter(value));
			dispatch(getVideoGames());
		}
	};

	return (
		<div className={style.conteiner}>
			<h3>Filter:</h3>
			<select className={style.select} onChange={handleChange}>
				<option value="filter" disabled="disabled" className={style.disable}>
					Filter By
				</option>
				<option value="all">All</option>
				<option value="api">Api</option>
				<option value="database">Database</option>
			</select>
		</div>
	);
};

export default Filters;
