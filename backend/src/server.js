const dotenv = require("dotenv/config")
const express = require("express")
const database =  require("./connection/database")
const router = require("./routes/router")
const cors = require("cors")

import patientModel from './models/Patient'

const server = express();

server.use(cors());

server.use(express.json()); // to support JSON-encoded bodies
server.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies

server.use("/api", router);

database
  .authenticate()
  .then(() => {
    console.log("MySQL up and running!");
  })
  .catch((err) => {
    console.log(err);
  });

server.listen(3000, (err) => {
  if (err) throw err;
  console.log("Server ready on http://localhost:3000");
});
