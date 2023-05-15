import axios from "axios";
import {
	GET_VIDEOGAMES,
	GET_GAME_BY_ID,
	GET_GAME_BY_NAME,
	CLEAN_DETAIL,
	TOGGLE_MENU,
} from "./action-types";
const HOST = import.meta.env.VITE_HOST;

export const getVideoGames = () => {
	return async (dispatch) => {
		try {
			const { data } = await axios(HOST);
			return dispatch({ type: GET_VIDEOGAMES, payload: data });
		} catch (error) {
			console.log(error.message);
		}
	};
};

export const getById = (id) => {
	return async (dispatch) => {
		try {
			const { data } = await axios(`${HOST}/${id}`);
			return dispatch({ type: GET_GAME_BY_ID, payload: data });
		} catch (error) {
			console.log(error.message);
		}
	};
};

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

export const getName = (name) => {
	return async (dispatch) => {
		try {
			const { data } = await axios(`${HOST}/search?name=${name}`);
			return dispatch({ type: GET_GAME_BY_NAME, payload: data });
		} catch (error) {
			console.log(error.message);
		}
	};
};
