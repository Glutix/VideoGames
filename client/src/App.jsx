//! import utils
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

//! import componnents
import Landing from "./componnents/LandingPage/Landing";
import Home from "./componnents/Home/Home";
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

	const isLandingPage = location.pathname === "/";

	return (
		<div>
			{!isLandingPage && <NavBar />}
			<Routes>
				<Route exact path="/" element={<Landing />} />
				<Route exact path="/home" element={<Home />} />
				<Route exact path="/detail/:id" element={<Detail />} />
				<Route exact path="/about" element={<About />} />
				<Route exact path="/search" element={<CardsName />} />
				<Route exact path="/home" element={<Genres />} />
				<Route exact path="/post" element={<CreateGame />} />
				<Route exact path="/genres" element={<DetailGenres />} />
			</Routes>
		</div>
	);
}

export default App;
