//importing packages...................
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
require("dotenv").config();

//.........................

require("./db/connection");

//importing router.......
const formRouter = require("./routes/formRoute");

//......................
const app = express();

//using middlewares.........................
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//.........................

//defining routes.........................
app.use("/form", formRouter);

//...........................

//404 middleware..........................
app.use((req, res) => {
  res.json({
    error: "404",
    message: "Route you were looking for was not found",
  });
});
//........................................

app.listen(process.env.port || 5000, () => {
  if (process.env.port) {
    console.log(`listening on ${process.env.port}`);
  } else {
    console.log("listening on 5000");
  }
});
