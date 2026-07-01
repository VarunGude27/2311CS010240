const express = require("express");
const router = express.Router();

const { getDepots } = require("../controller/depotController");

router.get("/depots", getDepots);

module.exports = router;