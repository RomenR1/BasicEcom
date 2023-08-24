const express = require("express");
const server = express();
const Router = require("./ROUTER/router.js");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MD_DATABASE);
  console.log("database connected");
}

// Apply middlewares
server.use(express.json()); // Use express.json() once
server.use(cors({ origin: "*" })); // Allow requests from any origin
server.use(express.static(path.join(__dirname, "dist")));

// Define routes
server.use("/products", Router.PoroductRouter); // Fixed typo here

// Start the server
// console.log(process.env.POST)
server.listen(process.env.PORT, () => {
  console.log("Server started on port 8080");
});
