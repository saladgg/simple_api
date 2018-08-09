const mongoose = require("mongoose");
const winston = require("winston");

module.exports = function() {
  mongoose
    .connect("mongodb://localhost/todoApp")
    .then(() => winston.info("Connected to MongoDB..."));
};
