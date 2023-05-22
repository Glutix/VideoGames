const validate = (gameData) => {
	const errors = { isValid: true };

	//?regex
	const nameRegex = /^[a-zA-Z0-9\s]+$/;
	const imageUrlRegex = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp))/;

	//? validar name
	if (!gameData.name) {
		errors.name = "Este campo es obligatorio";
		errors.isValid = false;
	} else if (gameData.name.length > 20 || gameData.name.length < 3) {
		errors.name = "Debe contener entre 3 y 20 caracteres";
		errors.isValid = false;
	} else if (!nameRegex.test(gameData.name)) {
		errors.name = "Ingresar una nombre valido";
		errors.isValid = false;
	}

	//? validar image URL
	if (!gameData.image.length) {
		errors.image = "Este campo es obligatorio";
		errors.isValid = false;
	} else if (!imageUrlRegex.test(gameData.image)) {
		errors.image = "Ingresar una URL valida";
		errors.isValid = false;
	}

	//? validar descrption
	if (!gameData.description.length) {
		errors.description = "Este campo es obligatario";
		errors.isValid = false;
	} else if (gameData.description.length <= 10) {
		errors.description = "Debe contener almenos 10 caracteres";
		errors.isValid = false;
	}

	//? validar gnres
	if (!gameData.genres.length) {
		errors.genres = "Este campo es obligatorio";
		errors.isValid = false;
	}

	//? validar platforms
	if (!gameData.platforms.length) {
		errors.platforms = "Este campo es obligatorio";
		errors.isValid = false;
	}

	//? Validar released
	if (!gameData.released.length) {
		errors.released = "Este campo es obligatorio";
		errors.isValid = false;
	}

	return errors;
};

export default validate;
