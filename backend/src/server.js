import dotenv from "dotenv/config";
import express from "express";
import database from "./connection/database";
import router from "./routes/router";
import cors from "cors";

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
