const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const config = require("./config");

const blogRoute = require("../route/blog");
const authRoute = require("../route/auth");

const app = express();

if (config.isVercel) {
  app.use(async (req, res, next) => {
    await mongoose.connect(config.mongoUri,config.mongoOptions);
    return next();
  });
}

mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("Connect Complete"))
  .catch((err) => console.log(err));

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
//route
app.use("/api", blogRoute);
app.use("/api", authRoute);

module.exports = app;

// app.listen(port, () => console.log(`Start server in port ${port}`));
