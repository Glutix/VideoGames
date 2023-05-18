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
} from "./action-types";
const HOST = import.meta.env.VITE_HOST;

//! Get
export const getVideoGames = () => {
	return async (dispatch) => {
		try {
			const { data } = await axios(`${HOST}/videogames`);
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

//! Filter
export const filter = (value) => {
	return async (dispatch) => {
		try {
			const { data } = await axios(`${HOST}/videogames/filter?name=${value}`);

			return dispatch({ type: FILTER, payload: data });
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

//! Sorted
export const sorted = (name, data) => {
	return async (dispatch) => {
		const response = await axios.post(
			`${HOST}/videogames/order?name=${name}`,
			data
		);
		return dispatch({ type: SORTED, payload: response.data });
	};
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
