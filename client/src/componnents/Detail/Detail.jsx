//! IMPORT
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { cleanDetail, getById } from "../../redux/actions";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";

const Detail = () => {

	const dispatch = useDispatch();
	const detail = useSelector((state) => state.gameDetail);
	const { id } = useParams();
	useEffect(() => {
		dispatch(getById(id));
		return () => dispatch(cleanDetail());
	}, [id]);

	return (
		<div className={style.conteiner}>
			<h1 className={style.title}>{detail.name}</h1>

			<section className={style.section}>
				<div className={style.info}>
					<img className={style.img} src={detail?.image} name={detail.name} />
					<h2 className={style.title2}>Released: </h2>
					<p className={style.description}>{detail.released}</p>

					<h2 className={style.title2}>Rating: </h2>
					<p className={style.description}>{detail.rating}</p>

					<h2 className={style.title2}>Plataformas: </h2>
					<p className={style.description}>{detail.platforms}</p>

					<h2 className={style.title2}>Genres: </h2>
					<p className={style.description}>{detail.genres?.join(" ")}</p>
				</div>
			</section>
		</div>
	);
};

export default Detail;
