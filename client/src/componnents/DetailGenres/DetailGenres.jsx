//! Import
import { getAllGenres } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

//! Hooks
import { useEffect } from "react";

//! Utils
import filterGenre from "../Utils/filterGenre";

//! Componnents
import Card from "../Card/Card";
import Genres from "../Genres/Genres";

const DetailGenres = () => {
	const dispatch = useDispatch();
	//! Global State
	const { allGames, isOpen, allGenres } = useSelector((state) => ({
		allGames: state.allGames,
		isOpen: state.toglleMenu,
		allGenres: state.allGenres,
	}));

	// consigo la query y filtrar por genero.
	const location = useLocation();
	const name = location.search.split("=")[1];
	const arrayId = filterGenre(allGenres, name);

	const gamesFound = allGames.filter((game) => arrayId.includes(game.id));

	useEffect(() => {
		dispatch(getAllGenres());
	}, [dispatch]);


	return (
		<div>
			<Genres />
			{gamesFound?.map((game) => {
				return (
					<Card
						key={game.id}
						id={game.id}
						name={game.name}
						image={game.image}
						rating={game.rating}
					/>
				);
			})}
		</div>
	);
};

export default DetailGenres;
