import {
	GET_VIDEOGAMES,
	GET_GAMEBYID,
	CLEAN_DETAIL,
	TOGGLE_MENU,
} from "./action-types";

const initialState = {
	games: [],
	gameDetail: {},
	toglleMenu: false,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_VIDEOGAMES:
			return {
				...state,
				games: action.payload,
			};

		case GET_GAMEBYID:
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
		default:
			return { ...state };
	}
};

export default reducer;
