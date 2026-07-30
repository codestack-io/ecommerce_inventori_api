const Product = require("../models/Product");

// Get all inventory
const getInventory = async () => {
  return await Product.find().select("name price stock category");
};

// Get low-stock products
const getLowStockProducts = async (threshold = 10) => {
  return await Product.find({
    stock: { $lte: threshold },
  }).select("name price stock category");
};

// Update product stock
const updateStock = async (productId, quantity, operation) => {
  const product = await Product.findById(productId);

  if (!product) {
    throw new Error("Product not found");
  }

  if (quantity <= 0) {
    throw new Error("Quantity must be greater than 0");
  }

  if (operation === "add") {
    product.stock += quantity;
  } else if (operation === "subtract") {
    if (product.stock < quantity) {
      throw new Error("Insufficient stock");
    }

    product.stock -= quantity;
  } else {
    throw new Error("Operation must be either 'add' or 'subtract'");
  }

  await product.save();

  return product;
};

module.exports = {
  getInventory,
  getLowStockProducts,
  updateStock,
};