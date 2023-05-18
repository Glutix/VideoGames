import {
	GET_VIDEOGAMES,
	GET_GAME_BY_ID,
	GET_GAME_BY_NAME,
	CLEAN_DETAIL,
	TOGGLE_MENU,
	FILTER,
	ORDER_BY_API,
	ORDER_BY_DB,
	STATE_FILTER,
	CREATED_GAME,
} from "./action-types";

const initialState = {
	games: [],
	gameDetail: {},
	gamesByName: [],
	addGame: [],
	toglleMenu: false,
	stateFilter: "",
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		//! get
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

		case GET_GAME_BY_NAME:
			return {
				...state,
				gamesByName: action.payload,
			};

		//! Filter
		case FILTER:
			return {
				...state,
				games: action.payload,
			};

		//! Order
		case ORDER_BY_API: {
			return {
				...state,
				games: action.payload,
			};
		}

		case ORDER_BY_DB: {
		}

		//!Post
		case CREATED_GAME: {
			return {
				...state,
				addGame: action.payload,
			};
		}

		//! Config
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
		case STATE_FILTER:
			return {
				...state,
				stateFilter: action.payload,
			};
		default:
			return { ...state };
	}
};

export default reducer;
