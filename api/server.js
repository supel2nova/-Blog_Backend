const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const blogRoute = require("../route/blog");
const authRoute = require("../route/auth");

const app = express();

if (config.isVercel) {
  app.use(async (req, res, next) => {
    await mongoose.connect(config.mongoUri);
    return next();
  });
}

mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("Connect Complete"))
  .catch((err) => console.log(err));

//middleware
app.use(express.json());
app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })
);
app.use(morgan("dev"));
//route
app.use("/api", blogRoute);
app.use("/api", authRoute);

const port = process.env.PORT || 8800;

module.exports = app;

// app.listen(port, () => console.log(`Start server in port ${port}`));
