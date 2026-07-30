const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const authorizeRoles = require("../middlewares/role.middleware");

const {
  getInventory,
  getLowStockProducts,
  updateStock,
} = require("../controllers/inventory.controller");

router.get(
  "/",
  authMiddleware,
  getInventory
);

router.get(
  "/low-stock",
  authMiddleware,
  getLowStockProducts
);

router.patch(
  "/:id/stock",
  authMiddleware,
  authorizeRoles("admin"),
  updateStock
);

module.exports = router;