const express = require("express");
const cors = require("cors");

const productRoutes = require("./routes/product.routes");
const orderRoutes = require("./routes/order.routes");
const inventoryRoutes = require("./routes/inventory.routes");
const errorHandler = require("./middlewares/errorHandler");
const rateLimiter = require("./middlewares/rateLimiter");
const errorMiddleware = require("./middlewares/error.middleware");
const authRoutes = require("./routes/auth.routes");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use(rateLimiter);
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/inventory", inventoryRoutes);
// Error handler should be LAST
app.use(errorHandler);

// Test Route
app.get("/", (req, res) => {
  res.send("E-Commerce Inventory API is Running...");
});

module.exports = app;