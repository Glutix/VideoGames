import React from "react";
import style from "./SearchBar.module.css";

const SearchBar = () => {
	return (
		<div>
			<label htmlFor="">
				<input type="text" className={style.btn} placeholder="Name" />
				<button className={style.btn}>Search</button>
			</label>
		</div>
	);
};

export default SearchBar;
