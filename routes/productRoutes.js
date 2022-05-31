const express = require("express");
const { getProducts, setProduct } = require("../controllers/productController");
const router = express.Router();

router.route("/").get(getProducts).post(setProduct);

module.exports = router;
