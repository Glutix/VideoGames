import React, { useEffect } from "react";
import style from "./Pages.module.css";
import { useDispatch, useSelector } from "react-redux";
import { handlePage } from "../../redux/actions";
import { useState } from "react";

const Pages = () => {
	//! Local State
	const dispatch = useDispatch();
	const [current, setCurrent] = useState(1);

	//! Limite de paginas
	const games = useSelector((state) => state.games);
	//* me quedo con la logintud de lo que se renderiza
	//* y lo divido por la cantidad de cartas
	const long = games.length;
	const limit = Math.ceil(long / 16);

	//* me quedo escuchando a los cambios de games, y reinicio los stados
	useEffect(() => {
		dispatch(handlePage(1));
		setCurrent(1);
	}, [games]);

	const handleClick = (event) => {
		const text = event.target.innerText;

		if (text === "next" && current < limit) {
			const updatedCurrent = current + 1;
			setCurrent(updatedCurrent);
			dispatch(handlePage(updatedCurrent));
		}

		if (text === "prev" && current > 1) {
			const updatedCurrent = current - 1;
			setCurrent(updatedCurrent);
			dispatch(handlePage(updatedCurrent));
		}
	};

	//* Deshabilitar el boton si current igual a limit o es igual 1
	const disableNext = current === limit;
	const disablePrev = current === 1;

	return (
		<div className={style.conteiner}>
			<button className={style.button} onClick={handleClick} disabled={disablePrev}>
				prev
			</button>
			<p>
				page {current} of {limit}
			</p>
			<button className={style.button} onClick={handleClick} disabled={disableNext}>
				next
			</button>
		</div>
	);
};

export default Pages;
