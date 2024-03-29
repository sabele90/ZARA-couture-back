require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { checkConnection, syncModels } = require("./DB-connection");
const Clothes = require("./api/models/clothes.model");

async function connectionDB() {
  checkConnection();
  syncModels("alter");
}

function launchServer() {
  const app = express();
  app
    .use(cors())
    .use(morgan("dev"))
    .use(express.json())
    .use("/api", require("./api/routers/index"))
    .listen(process.env.PORT, () =>
      console.log("Server listening on port 3000")
    );
}

async function startApi() {
  connectionDB();
  launchServer();
}

startApi();
