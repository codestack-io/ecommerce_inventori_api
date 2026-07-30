const express = require("express");
const router = express.Router();

const {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrderStatus,
  deleteOrder,
} = require("../controllers/order.controller");

const validate = require("../middlewares/validate.middleware");
const orderSchema = require("../validations/order.validator");

router.post(
  "/",
  validate(orderSchema),
  createOrder
);

router.get("/", getAllOrders);

router.get("/:id", getOrderById);

router.put("/:id/status", updateOrderStatus);

router.delete("/:id", deleteOrder);

module.exports = router;