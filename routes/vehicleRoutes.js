const express = require("express");
const router = express.Router();

const { getVehicles } = require("../controller/vehicleController");

router.get("/vehicles", getVehicles);

module.exports = router;