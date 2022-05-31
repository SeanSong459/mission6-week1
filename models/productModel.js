// import mongoose from "mongoose";
const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  quantity: {
    type: Number,
  },
});

module.exports = mongoose.model("Product", productSchema);
