//! import utils
import "./App.css";
import { Routes, Route } from "react-router-dom";

//! import componnents
import Landing from "./componnents/LandingPage/Landing";
import Cards from "./componnents/Cards/Cards";
import NavBar from "./componnents/NavBar/NavBar";
import { useLocation } from "react-router-dom";
import Detail from "./componnents/Detail/Detail";
import About from "./componnents/About/About";

function App() {
	const location = useLocation();

	return (
		<div>
			{location.pathname != "/" && <NavBar />}
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/home" element={<Cards />} />
				<Route path="/detail/:id" element={<Detail />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</div>
	);
}

export default App;
