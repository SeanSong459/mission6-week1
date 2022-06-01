const asyncHandler = require("express-async-handler");

const Product = require("../models/productModel.js");
const quickSort = require("../quickSort.js");

// @desc   Get Products
// @route  GET  /api/products
//@access Private
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  // const sortedProducts = quickSort(products);
  const sortedProducts = quickSort(products);
  console.log(products);
  console.log(sortedProducts);
  res.status(200).json(sortedProducts);
});
// @desc   Set Products
// @route  POST  /api/products
// @access Private
const setProduct = asyncHandler(async (req, res) => {
  if (!req.body.name || !req.body.description || !req.body.quantity) {
    return res.status(400).json({
      success: false,
      error: "Please enter all fields",
    });
  }

  const product = await Product.create({
    name: req.body.name,
    description: req.body.description,
    quantity: req.body.quantity,
  });
  res.status(200).json(product);
});

module.exports = {
  getProducts,
  setProduct,
};
