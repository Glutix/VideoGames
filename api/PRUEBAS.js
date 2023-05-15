const data = [
	{
		id: 1,
		name: "a",
		description: "asd1",
	},
	{
		id: 2,
		name: "b",
		description: "asd2",
	},
	{
		id: 3,
		name: "c",
		description: "asd3",
	},
	{
		id: 4,
		name: "d",
		description: "asd4",
	},
];

const obj = {};
console.log(!Object.keys(obj).length);

//! EJEMPLO DE DB ---> module.exports = {...database.models}
const database = {
	models: {
		function1: (ejemplo1) => {
			ejemplo1;
		},
		function2: (ejemplo2) => {
			ejemplo2;
		},
	},
	otros: "otro propeidad",
	etc: "Etc",
};

//! Este objeto es el que se importaria
console.log({ ...database.models });

//! Despues si requiero utilizar las fn... por ejemplo:
//? const { function1 , function2 } = require(./database)

//! spreak operator
let responseAPI = [
	{
		id: 3498,
		name: "Grand Theft Auto V",
		image:
			"https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
		platforms: [
			"PC",
			"PlayStation 3",
			"PlayStation 4",
			"PlayStation 5",
			"Xbox 360",
			"Xbox One",
			"Xbox Series S/X",
		],
		released: "2013-09-17",
		rating: 4.47,
		genres: ["Action", "Adventure"],
	},
];

let reseponseDB = [
	{
		id: 2,
		name: "pockemon",
		description: "Es un juego RPG de mundo abierto etc.",
		platforms: "Pc, Xbox",
		image: "image.jpg",
		released: "21/1/2023",
		rating: 5,
		createdAt: "2023-05-11T00:52:30.292Z",
		updatedAt: "2023-05-11T00:52:30.292Z",
	},
];

const response = [...reseponseDB, ...responseAPI];

console.log(response);

const dataxd = [];
const api = {};
if (!api || !dataxd.length) {
	console.log(true);
} else {
	console.log(false);
}

const objrandom = { detail: ["action", "asd", "xd"] };
const asd = objrandom.detail.join(" ")
console.log(asd);


const detalles = "action,asd,xd"

console.log(detalles.split(",").join(" "))