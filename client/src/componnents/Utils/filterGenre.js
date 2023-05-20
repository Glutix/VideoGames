const generos = ["action, shooter"];

const array = [
	{
		id: 3498,
		name: "Grand Theft Auto V",
		genres: ["Action", "Adventure"],
	},
	{
		id: 3328,
		name: "The Witcher 3: Wild Hunt",
		genres: ["Action", "Adventure", "RPG"],
	},
	{
		id: 4200,
		name: "Portal 2",
		genres: ["Puzzle", "Shooter"],
	},
	{
		id: 5286,
		name: "Tomb Raider (2013)",
		genres: ["Action", "Adventure"],
	},
	{
		id: 4291,
		name: "Counter-Strike: Global Offensive",
		genres: ["Action", "Shooter"],
	},
	{
		id: 13536,
		name: "Portal",
		genres: ["Adventure", "Puzzle"],
	},
];

const filterGenre = (array, arrayGenres) => {
	const results = array.filter((game) => 
  game.genres.map((genre) => genre)
  
  );
};

export default filterGenre;
