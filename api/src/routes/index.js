//! Import
const { Router } = require("express");
const router = Router();

//! Import Routes
const videogames = require("./videogames");
const genres = require("./genres");
const filters = require("./filters");
const order = require("./order");

//! Routes
router.use("/videogames", videogames);
router.use("/genres", genres);
router.use("/filter", filters);
router.use("/order", order);
//router.use("/login", login);

module.exports = router;
