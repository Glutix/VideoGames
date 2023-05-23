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
				<div className={style.conteinerImg}>
					<img className={style.img} src={detail?.image} name={detail.name} />

					<div className={style.conteinerDesc}>
						<h2 className={style.title2}>Description: </h2>
						<p className={style.description}>{detail.description}</p>
					</div>
				</div>
				<div className={style.info}>
					<div className={style.campus}>
						<h2 className={style.title2}>Released: </h2>
						<p className={style.textdesc}>{detail.released}</p>
					</div>

					<div className={style.campus}>
						<h2 className={style.title2}>Rating: </h2>
						<p className={style.textdesc}>{detail.rating}</p>
					</div>

					<div className={style.campus}>
						<h2 className={style.title2}>Platforms: </h2>
						<p className={style.textdesc}>{detail.platforms}</p>
					</div>

					<div className={style.campus}>
						<h2 className={style.title2}>Genres: </h2>
						<p className={style.textdesc}>{detail.genres}</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Detail;
