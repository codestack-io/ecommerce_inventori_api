const inventoryService = require("../services/inventory.service");

// Get all inventory
const getInventory = async (req, res) => {
  try {
    const inventory = await inventoryService.getInventory();

    res.status(200).json({
      success: true,
      count: inventory.length,
      data: inventory,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get low-stock products
const getLowStockProducts = async (req, res) => {
  try {
    const threshold = req.query.threshold
      ? Number(req.query.threshold)
      : 10;

    const products = await inventoryService.getLowStockProducts(threshold);

    res.status(200).json({
      success: true,
      threshold,
      count: products.length,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update stock
const updateStock = async (req, res) => {
  try {
    const { quantity, operation } = req.body;

    if (!quantity || !operation) {
      return res.status(400).json({
        success: false,
        message: "Quantity and operation are required",
      });
    }

    const product = await inventoryService.updateStock(
      req.params.id,
      Number(quantity),
      operation
    );

    res.status(200).json({
      success: true,
      message: "Stock updated successfully",
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getInventory,
  getLowStockProducts,
  updateStock,
};