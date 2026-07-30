const express = require("express");
const router = express.Router();

const {
  createOrder,
  getAllOrders,
  getOrderById,
} = require("../controllers/order.controller");

// Create Order
router.post("/", createOrder);

// Get All Orders
router.get("/", getAllOrders);

// Get Order By ID
router.get("/:id", getOrderById);

module.exports = router;