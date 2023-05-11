//! Import
const { Router } = require("express");
const router = Router();

//! Import Routes
const videogames = require("./videogames");
const genres = require("./genres");

//! Routes
router.use("/videogames", videogames);
router.use("/genres", genres);
//router.use("/login", login);

module.exports = router;
