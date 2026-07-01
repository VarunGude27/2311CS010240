const axios = require("axios");
const Log = require("../middleware/logger");
require("dotenv").config();

const fetchDepots = async () => {
    try {

        await Log(
            "backend",
            "info",
            "service",
            "Fetching depot details"
        );

        const response = await axios.get(
            "http://4.224.186.213/evaluation-service/depots",
            {
                headers: {
                    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
                }
            }
        );

        return response.data;

    } catch (error) {

        await Log(
            "backend",
            "error",
            "service",
            error.response?.data?.message || error.message
        );

        throw error;
    }
};

module.exports = {
    fetchDepots
};