const Product = require("../models/Product");

// Create a new product
const createProduct = async (productData) => {
  const product = await Product.create(productData);
  return product;
};

// Get all products
const getAllProducts = async () => {
  return await Product.find();
};

// Get a single product by ID
const getProductById = async (id) => {
  return await Product.findById(id);
};

// Update a product
const updateProduct = async (id, updatedData) => {
  return await Product.findByIdAndUpdate(id, updatedData, {
    new: true,
    runValidators: true,
  });
};

// Delete a product
const deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};