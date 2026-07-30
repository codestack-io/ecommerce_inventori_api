const express = require("express");
const router = express.Router();

const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");

const validateProduct = require("../middlewares/validate.middleware");
const productSchema = require("../validations/product.validator");

// Create Product
router.post(
  "/",
  validateProduct(productSchema),
  createProduct
);

// Get All Products
router.get("/", getAllProducts);

// Get Product By ID
router.get("/:id", getProductById);

// Update Product
router.put(
  "/:id",
  validateProduct(productSchema),
  updateProduct
);

// Delete Product
router.delete("/:id", deleteProduct);

module.exports = router;