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

//! Utils
import filter from "../componnents/Utils/filter";
import sorted from "../componnents/Utils/sorted";

const initialState = {
	games: [],
	allGames: [],
	allGenres: [],
	gameDetail: {},
	gamesByName: [],
	addGame: [],
	toglleMenu: false,
	stateFilter: "",
	page: 1,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		//! get
		case GET_ALL_GENRES:
			return {
				...state,
				allGenres: action.payload,
			};

		case GET_VIDEOGAMES:
			return {
				...state,
				allGames: action.payload,
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
			//* la funcion filter recibe dos parametros un name un array
			const games = filter(action.payload, state.allGames);

			return {
				...state,
				games: games,
			};

		//! Order
		case SORTED: {
			//* la funcion sorted recibe dos parametros, order y un array
			const sortedData = sorted(action.payload, state.games);
			return {
				...state,
				games: [...sortedData],
			};
		}

		//!Post
		case CREATED_GAME: {
			return {
				...state,
				addGame: action.payload,
			};
		}

		//! Config
		case PAGE:
			return {
				...state,
				page: action.payload,
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
