const { fetchVehicles } = require("../services/vehicleService");

const getVehicles = async (req, res) => {
    const vehicles = await fetchVehicles();
    res.json(vehicles);
};

module.exports = {
    getVehicles
};