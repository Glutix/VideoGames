import {
	GET_VIDEOGAMES,
	GET_GAME_BY_ID,
	GET_GAME_BY_NAME,
	CLEAN_DETAIL,
	TOGGLE_MENU,
} from "./action-types";

const initialState = {
	games: [],
	gameDetail: {},
	toglleMenu: false,
	gamesByName: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_VIDEOGAMES:
			return {
				...state,
				games: action.payload,
			};

		case GET_GAME_BY_ID:
			return {
				...state,
				gameDetail: action.payload,
			};

		case CLEAN_DETAIL:
			return {
				...state,
				gameDetail: {},
			};

		case TOGGLE_MENU:
			return {
				...state,
				toglleMenu: action.payload,
			};

		case GET_GAME_BY_NAME:
			return {
				...state,
				gamesByName: action.payload,
			};

		default:
			return { ...state };
	}
};

export default reducer;
