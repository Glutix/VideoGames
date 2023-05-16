//! Import
const express = require("express");
const router = express.Router();

//! Controllers
const { orderApi } = require("../controllers/order");

//! Get
router.get("/api", orderApi);

module.exports = router;
