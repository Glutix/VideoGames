//! import utils
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

//! import componnents
import Landing from "./componnents/LandingPage/Landing";
import Cards from "./componnents/Cards/Cards";
import NavBar from "./componnents/NavBar/NavBar";
import Detail from "./componnents/Detail/Detail";
import About from "./componnents/About/About";
import CardsName from "./componnents/CardsName/CardsName";

function App() {
	//! Utils
	const location = useLocation();

	//! Estados
	const { games, isOpen, gamesByName } = useSelector((state) => ({
		games: state.games,
		isOpen: state.toglleMenu,
		gamesByName: state.gamesByName,
	}));

	return (
		<div>
			{location.pathname != "/" && <NavBar />}
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/home" element={<Cards games={games} isOpen={isOpen} />} />
				<Route path="/detail/:id" element={<Detail />} />
				<Route path="/about" element={<About />} />
				<Route
					path="/search"
					element={<CardsName gamesByName={gamesByName} isOpen={isOpen} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
