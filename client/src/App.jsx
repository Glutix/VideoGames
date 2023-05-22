//! import utils
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
import NotFound from "./componnents/NotFound/NotFound";

function App() {
	//! Utils
	const location = useLocation();
	const navigate = useNavigate();

	const isHomePage = location.pathname === "/";
	if (location.key === "default") return navigate("/notfound");
	console.log(location);
	const isNotFoundPage = location.pathname === "/notfound";

	return (
		<div>
			{!isHomePage && !isNotFoundPage && <NavBar />}
			<Router>
				<Switch>
					<Route exact path="/" Component={Landing} />
					<Route exact path="/home" Component={Home} />
					<Route exact path="/detail/:id" Component={Detail} />
					<Route exact path="/about" Component={About} />
					<Route exact path="/search" Component={CardsName} />
					<Route exact path="/post" Component={CreateGame} />
					<Route exact path="/home" Component={Genres} />
					<Route exact path="/genres" Component={DetailGenres} />
					<Route exact path="/notfound" Component={NotFound} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
