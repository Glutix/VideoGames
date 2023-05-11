//! Import
const express = require("express");
const router = express.Router();

//! Controllers
const { allGenres } = require("../controllers/genres");

//! Get
router.get("/", allGenres);

module.exports = router;
