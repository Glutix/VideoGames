//! Import
const express = require("express");
const router = express.Router();

//! Controllers
const { allGenres, postGender } = require("../controllers/genres");

//! Get
router.get("/", allGenres);

//! Post
router.post("/post", postGender);

module.exports = router;
