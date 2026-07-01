const { fetchDepots } = require("../services/depotService");
const Log = require("../middleware/logger");

const getDepots = async (req, res) => {
    try {

        await Log(
            "backend",
            "info",
            "controller",
            "Fetching depots"
        );

        const depots = await fetchDepots();

        res.status(200).json(depots);

    } catch (error) {

        await Log(
            "backend",
            "error",
            "controller",
            error.response?.data?.message || error.message
        );

        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    getDepots
};