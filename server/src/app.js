const express = require("express")
const cors = require("cors");
const path = require("path")
const morgan = require("morgan")

const { planetRouter } = require("./route/planet/planet.route");

const { launchRouter } = require("./route/launch/launch.route");

const corOptions = {
    origin: "http://localhost:3000"
}


const app = express();

app.use(cors(corOptions))

app.use(morgan("combined"))

app.use("/",express.static(path.join(__dirname,"..","public")))

app.use(express.json())

app.use("/api/plenet",planetRouter)
app.use("/api",launchRouter)


// note the * at the route represents for all other routes that is not being caught
app.get("/*", (req,res) => {
 res.sendFile(path.join(__dirname,"..","public","index.html"));
})
module.exports = app