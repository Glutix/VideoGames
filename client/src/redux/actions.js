import axios from "axios";

//! Const
import {
	GET_VIDEOGAMES,
	GET_GAME_BY_ID,
	GET_GAME_BY_NAME,
	CLEAN_DETAIL,
	TOGGLE_MENU,
	FILTER,
	SORTED,
	STATE_FILTER,
	CREATED_GAME,
	PAGE,
	GET_ALL_GENRES,
} from "./action-types";
const HOST = import.meta.env.VITE_HOST;

//! Get

export const getAllGenres = () => {
	return async (dispatch) => {
		try {
			const { data } = await axios(`${HOST}/videogames/genres`);
			return dispatch({ type: GET_ALL_GENRES, payload: data });
		} catch (error) {
			console.log(error.message);
		}
	};
};

export const getVideoGames = (param) => {
	return async (dispatch) => {
		try {
			const { data } = await axios(`${HOST}/videogames/?page=${param}`);
			return dispatch({ type: GET_VIDEOGAMES, payload: data });
		} catch (error) {
			console.log(error.message);
		}
	};
};

export const getById = (id) => {
	return async (dispatch) => {
		try {
			const { data } = await axios(`${HOST}/videogames/${id}`);
			return dispatch({ type: GET_GAME_BY_ID, payload: data });
		} catch (error) {
			console.log(error.message);
		}
	};
};

export const getName = (name) => {
	return async (dispatch) => {
		try {
			const { data } = await axios(`${HOST}/videogames/search?name=${name}`);
			return dispatch({ type: GET_GAME_BY_NAME, payload: data });
		} catch (error) {
			console.log(error.message);
		}
	};
};

//! Post
export const createGame = (game) => {
	return async (dispatch) => {
		try {
			const { data } = await axios.post(`${HOST}/videogames/post`, game);

			if (!data) throw new Error(error.message);
			return dispatch({ type: CREATED_GAME, payload: data });
		} catch (error) {
			alert(error.response.data.error);
		}
	};
};

//! Filter
export const filter = (name) => {
	return { type: FILTER, payload: name };
};

//! Sorted
export const sorted = (name) => {
	return { type: SORTED, payload: name };
};

//! Config
export const cleanDetail = () => {
	return (dispatch) => {
		return dispatch({ type: CLEAN_DETAIL });
	};
};

export const handleToggle = (isOpen) => {
	return (dispatch) => {
		return dispatch({ type: TOGGLE_MENU, payload: isOpen });
	};
};

export const handleStateFilter = (string) => {
	return (dispatch) => {
		return dispatch({ type: STATE_FILTER, payload: string });
	};
};

export const handlePage = (num) => {
	return (dispatch) => {
		return dispatch({ type: PAGE, payload: num });
	};
};
