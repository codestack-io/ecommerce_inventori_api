const express = require("express");
const router = express.Router();

const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");

const authorizeRoles = require("../middlewares/role.middleware");
const validateProduct = require("../middlewares/validate.middleware");
const productSchema = require("../validations/product.validator");
const authMiddleware = require("../middlewares/auth.middleware");
// Anyone authenticated can view products
router.get("/", authMiddleware, getAllProducts);
router.get("/:id", authMiddleware, getProductById);

// Only admins can modify products
router.post(
  "/",
  authMiddleware,
  authorizeRoles("admin"),
  validateProduct(productSchema),
  createProduct
);

router.put(
  "/:id",
  authMiddleware,
  authorizeRoles("admin"),
  validateProduct(productSchema),
  updateProduct
);

router.delete(
  "/:id",
  authMiddleware,
  authorizeRoles("admin"),
  deleteProduct
);

module.exports = router;