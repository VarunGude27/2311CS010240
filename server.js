const express = require("express");

const depotRoutes = require("./routes/depotRoutes");
const vehicleRoutes = require("./routes/vehicleRoutes");

const app = express();

app.use(express.json());

app.use("/api", depotRoutes);
app.use("/api", vehicleRoutes);

app.listen(3000, () => {
    console.log("Server started on port 3000");
});