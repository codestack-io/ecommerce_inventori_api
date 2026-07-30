const Order = require("../models/Order");
const Product = require("../models/Product");

const createOrder = async (orderData) => {
  const { customerName, customerEmail, items } = orderData;

  let totalAmount = 0;
  const orderItems = [];

  // Check every ordered product
  for (const item of items) {
    const product = await Product.findById(item.productId);

    if (!product) {
      throw new Error(`Product not found: ${item.productId}`);
    }

    // Check stock availability
    if (product.stock < item.quantity) {
      throw new Error(`Insufficient stock for ${product.name}`);
    }

    // Reduce stock
    product.stock -= item.quantity;
    await product.save();

    // Calculate total
    totalAmount += product.price * item.quantity;

    orderItems.push({
      product: product._id,
      quantity: item.quantity,
      price: product.price,
    });
  }

  // Save order
  const order = await Order.create({
    customerName,
    customerEmail,
    items: orderItems,
    totalAmount,
  });

  return order;
};

// Get all orders
const getAllOrders = async () => {
  return await Order.find().populate("items.product");
};

// Get single order
const getOrderById = async (id) => {
  return await Order.findById(id).populate("items.product");
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
};