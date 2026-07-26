const express = require("express");
const router = express.Router();

const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");

// Create Product
router.post("/", createProduct);

// Get All Products
router.get("/", getAllProducts);

// Get Product By ID
router.get("/:id", getProductById);

// Update Product
router.put("/:id", updateProduct);

// Delete Product
router.delete("/:id", deleteProduct);

module.exports = router;