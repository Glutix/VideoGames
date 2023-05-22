import React from "react";
import style from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";

import { Link, useNavigate } from "react-router-dom";
//import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleToggle } from "../../redux/actions";

const NavBar = () => {
	//const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const isOpen = useSelector((state) => state.toglleMenu);

	const handleClick = () => {
		dispatch(handleToggle(!isOpen));
	};

	const hangleNewGame = () => {
		navigate("/post");
	};

	return (
		<div className={`${style.conteiner} ${isOpen && style.conteinerIsOpen}`}>
			<Link to="/home" className={style.logoText}>
				Video Games
			</Link>

			<div className={`${isOpen && style.search}`}>
				<SearchBar />
			</div>


			<div
				className={`${style.conteinerItems} ${
					isOpen && style.conteinerItemsOpen
				}`}
			>
			<div className={style.conteinerNewGame}>
				<button onClick={hangleNewGame} className={style.btnGame}>
					+
				</button>
				<p onClick={hangleNewGame} className={style.textGame}>
					New Game
				</p>
			</div>
				<Link to="/home" className={style.link} onClick={handleClick}>
					Home
				</Link>
				<Link to="/about" className={style.link} onClick={handleClick}>
					About
				</Link>

				<Link to="/" className={style.link} onClick={handleClick}>
					Log Out
				</Link>
			</div>

			<div
				className={`${style.toggle} ${isOpen && style.toggleSpanOpen}`}
				onClick={handleClick}
			>
				<span className={`${style.span} ${isOpen && style.s1}`}></span>
				<span className={`${style.span} ${isOpen && style.s2}`}></span>
				<span className={`${style.span} ${isOpen && style.s3}`}></span>
			</div>
		</div>
	);
};

export default NavBar;
