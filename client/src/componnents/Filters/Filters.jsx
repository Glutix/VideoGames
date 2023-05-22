import React, { useEffect } from "react";
import style from "./Filters.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filter, handleStateFilter } from "../../redux/actions";

const Filters = () => {
	const dispatch = useDispatch();
	const allGames = useSelector((state) => state.allGames);

	//* Se queda escuchando a (allGames) => y se despacha el filtrado "all"
	useEffect(() => {
		dispatch(filter("all"));
	}, [allGames]);

	const handleChange = (event) => {
		const name = event.target.value;

		if (name === "all") {
			dispatch(handleStateFilter(name));
			dispatch(filter(name));
		}

		if (name === "api") {
			dispatch(handleStateFilter(name));
			dispatch(filter(name));
		}

		if (name === "database") {
			dispatch(handleStateFilter(name));
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
