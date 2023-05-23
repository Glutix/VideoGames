import React from "react";
import style from "./Filters.module.css";
import { useDispatch } from "react-redux";
import { filter } from "../../redux/actions";

const Filters = () => {
	const dispatch = useDispatch();

	const handleChange = (event) => {
		const name = event.target.value;

		if (name === "all") {
			dispatch(filter(name));
		}

		if (name === "api") {
			dispatch(filter(name));
		}

		if (name === "database") {
			dispatch(filter(name));
		}
	};

	return (
		<div className={style.conteiner}>
			<h3 className={style.title}>Filter:</h3>
			<select
				className={style.select}
				onChange={handleChange}
				defaultValue="Filter By"
			>
				<option className={style.disable} value="Filter By" disabled="disable">
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
