const express = require("express");
const cors = require("cors");

const productRoutes = require("./routes/product.routes");
const orderRoutes = require("./routes/order.routes");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("E-Commerce Inventory API is Running...");
});

module.exports = app;