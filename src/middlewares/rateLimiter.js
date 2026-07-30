const rateLimit = require("express-rate-limit");

const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes

  max: 100, // Maximum 100 requests per IP

  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },

  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = rateLimiter;