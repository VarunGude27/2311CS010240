const axios = require("axios");
require("dotenv").config();

async function Log(stack, level, packageName, message) {
    try {
        console.log("Access Token:");
        console.log(process.env.ACCESS_TOKEN);

        const response = await axios.post(
            "http://4.224.186.213/evaluation-service/logs",
            {
                stack,
                level,
                package: packageName,
                message
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
                    "Content-Type": "application/json"
                }
            }
        );

        console.log("Log Sent Successfully");
        console.log(response.data);

    } catch (err) {
        if (err.response) {
            console.log("Status:", err.response.status);
            console.log("Response:", err.response.data);
        } else {
            console.log(err.message);
        }
    }
}

module.exports = Log;