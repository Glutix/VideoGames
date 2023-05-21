//! import utils
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

//! import componnents
import Landing from "./componnents/LandingPage/Landing";
import Cards from "./componnents/Cards/Cards";
import NavBar from "./componnents/NavBar/NavBar";
import Detail from "./componnents/Detail/Detail";
import About from "./componnents/About/About";
import CardsName from "./componnents/CardsName/CardsName";
import CreateGame from "./componnents/CreateGame/CreateGame";
import Genres from "./componnents/Genres/Genres";
import DetailGenres from "./componnents/DetailGenres/DetailGenres";

function App() {
	//! Utils
	const location = useLocation();

	return (
		<div>
			{location.pathname != "/" && <NavBar />}
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/home" element={<Cards />} />
				<Route path="/detail/:id" element={<Detail />} />
				<Route path="/about" element={<About />} />
				<Route path="/search" element={<CardsName />} />
				<Route path="/post" element={<CreateGame />} />
				<Route path="/home" element={<Genres />} />
				<Route path="/genres" element={<DetailGenres />} />
			</Routes>
		</div>
	);
}

export default App;
