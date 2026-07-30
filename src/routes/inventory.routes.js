const express = require("express");
const router = express.Router();

const {
  getInventory,
  getLowStockProducts,
  updateStock,
} = require("../controllers/inventory.controller");

// Get all inventory
router.get("/", getInventory);

// Get low-stock products
router.get("/low-stock", getLowStockProducts);

// Add or subtract stock
router.patch("/:id/stock", updateStock);

module.exports = router;