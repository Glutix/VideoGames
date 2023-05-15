//! Utils
import React from "react";
import style from "./SearchBar.module.css";

//! Hooks
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getName } from "../../redux/actions";

const SearchBar = () => {
	const [name, setName] = useState("");
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleChange = (event) => {
		setName(event.target.value);
	};

	const handleClick = () => {
		dispatch(getName(name));
		setName("");
		navigate({
			pathname: "/search",
			search: `name=${name}`,
		});
	};

	const handleKey = (event) => {
		if (event.key === "Enter") {
			dispatch(getName(name));
			setName("");
			navigate({
				pathname: "/search",
				search: `name=${name}`,
			});
		}
	};

	return (
		<div>
			<input
				type="text"
				className={style.btn}
				placeholder="Name"
				value={name}
				onChange={handleChange}
				onKeyDown={handleKey}
			/>
			<button className={style.btn} onClick={handleClick}>
				Search
			</button>
		</div>
	);
};

export default SearchBar;
