import React from "react";
import style from "./Filters.module.css";
import { useDispatch } from "react-redux";
import { filter, getVideoGames, handleStateFilter } from "../../redux/actions";

const Filters = () => {
	const dispatch = useDispatch();

	const handleChange = (event) => {
		const value = event.target.value;

		if (value === "all") {
			dispatch(handleStateFilter(value));
			dispatch(getVideoGames());
		}

		if (value === "api") {
			dispatch(handleStateFilter(value));
			dispatch(filter(value));
		}

		if (value === "database") {
			dispatch(handleStateFilter(value));
			dispatch(filter(value));
		}
	};

	return (
		<div className={style.conteiner}>
			<h3>Filter:</h3>
			<select className={style.select} onChange={handleChange}>
				<option
					className={style.disable}
					selected="Filter By"
					disabled="disable"
				>
					Filter By
				</option>
				<option defaultValue="all" value="all">
					All
				</option>
				<option value="api">Api</option>
				<option value="database">Database</option>
			</select>
		</div>
	);
};

export default Filters;
