import React from "react";
import { Link } from "react-router-dom";
import style from "./Landing.module.css";

//snippets atajo --> rafce
const Landing = () => {
	return (
		<div className={style.landing}>
			<div className={style.conteiner}>
				<h1 className={style.title}>Welcome</h1>
				<Link to="/home" className={style.Link}>
					<button className={style.btn}>Get started</button>
				</Link>
			</div>
		</div>
	);
};

export default Landing;
