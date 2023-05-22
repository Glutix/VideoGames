//! Import
const { Router } = require("express");
const router = Router();

//! Import Routes
const videogames = require("./videogames");

//! Routes
router.use("/videogames", videogames);

module.exports = router;
