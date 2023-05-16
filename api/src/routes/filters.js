//! Import
const express = require("express");
const router = express.Router();

//! Controllers
const { filterApi } = require("../controllers/filters");

//! Get
router.get("/api", filterApi);

module.exports = router;
