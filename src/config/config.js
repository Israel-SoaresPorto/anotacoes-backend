const dotenv = require("dotenv");

dotenv.config({
  path:
    process.env.NODE_ENV === "develepment"
      ? ".env.develepment"
      : ".env.production",
});

module.exports = {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
};
