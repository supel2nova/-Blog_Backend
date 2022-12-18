require("dotenv").config();

module.exports = {
  isVercel: process.env.IS_VERCEL || false,
  port: process.env.PORT || 8800,
  mongoUri: process.env.DATABASE,
  password: process.env.PASSWORD,
  jwtsecret: process.env.JWT_SECRET,
};
